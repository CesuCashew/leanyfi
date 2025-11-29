// ===================================
// LEANYFI - Game Engine
// Core game logic and state management
// ===================================

class GameEngine {
    constructor(audioPlayer, statsManager) {
        this.audioPlayer = audioPlayer;
        this.statsManager = statsManager;

        this.currentMode = null;
        this.currentDifficulty = 'normal';
        this.questions = [];
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.correctCount = 0;
        this.streak = 0;
        this.startTime = null;
        this.questionStartTime = null;
        this.totalQuestions = 10;
        this.timePerQuestion = 10; // seconds to answer
        this.questionTimer = null;
    }

    /**
     * Start a new game
     */
    startGame(mode, difficulty = 'normal') {
        this.currentMode = mode;
        this.currentDifficulty = difficulty;
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.correctCount = 0;
        this.streak = 0;
        this.startTime = Date.now();

        // Generate questions based on mode
        this.questions = this.generateQuestions(mode, difficulty);

        return this.questions.length > 0;
    }

    /**
     * Generate questions for the game
     */
    generateQuestions(mode, difficulty) {
        const questions = [];

        if (mode === 'songRecognition') {
            const songs = getSongsByDifficulty(difficulty);

            // Select random songs
            const selectedSongs = this.shuffleArray([...songs]).slice(0, this.totalQuestions);

            selectedSongs.forEach(correctSong => {
                // Generate wrong answers (2 wrong + 1 correct = 3 total)
                const wrongAnswers = this.getRandomSongs(songs, correctSong, 2);

                // Combine and shuffle answers
                const answers = this.shuffleArray([
                    { text: correctSong.title, correct: true, song: correctSong },
                    ...wrongAnswers.map(song => ({ text: song.title, correct: false, song }))
                ]);

                questions.push({
                    type: 'song',
                    correctSong,
                    answers,
                    question: 'What song is this?'
                });
            });
        } else if (mode === 'albumRecognition') {
            // Get random songs
            const allSongs = [...getSongsByDifficulty('normal'), ...getSongsByDifficulty('hardcore')];
            const selectedSongs = this.shuffleArray(allSongs).slice(0, this.totalQuestions);

            selectedSongs.forEach(song => {
                const correctAlbum = song.album;

                // Get wrong albums with their covers
                const wrongAlbums = this.getRandomAlbumsWithCovers(correctAlbum, 2);

                // Get the correct album info
                const correctAlbumInfo = ALBUMS_DATABASE.find(a => a.name === correctAlbum);

                // Combine and shuffle answers
                const answers = this.shuffleArray([
                    {
                        text: correctAlbum,
                        correct: true,
                        albumCover: correctAlbumInfo ? correctAlbumInfo.cover : song.albumCover
                    },
                    ...wrongAlbums.map(album => ({
                        text: album.name,
                        correct: false,
                        albumCover: album.cover
                    }))
                ]);

                questions.push({
                    type: 'album',
                    correctSong: song,
                    correctAlbum,
                    answers,
                    question: 'Which album is this song from?'
                });
            });
        }

        return questions;
    }

    /**
     * Get current question
     */
    getCurrentQuestion() {
        return this.questions[this.currentQuestionIndex];
    }

    /**
     * Play current question audio
     */
    async playCurrentQuestion() {
        const question = this.getCurrentQuestion();
        if (question && question.correctSong) {
            this.questionStartTime = Date.now();
            await this.audioPlayer.playSong(question.correctSong);

            // Start answer timer
            this.startQuestionTimer();
        }
    }

    /**
     * Start timer for answering
     */
    startQuestionTimer() {
        this.questionTimer = setTimeout(() => {
            // Time's up - treat as wrong answer
            this.submitAnswer(null);
        }, this.timePerQuestion * 1000);
    }

    /**
     * Clear question timer
     */
    clearQuestionTimer() {
        if (this.questionTimer) {
            clearTimeout(this.questionTimer);
            this.questionTimer = null;
        }
    }

    /**
     * Submit an answer
     */
    submitAnswer(answer) {
        this.clearQuestionTimer();
        this.audioPlayer.stop();

        const question = this.getCurrentQuestion();
        const isCorrect = answer && answer.correct;

        // Calculate points
        const timeBonus = this.calculateTimeBonus();
        const points = isCorrect ? (100 + timeBonus) : 0;

        // Update score and stats
        this.score += points;
        if (isCorrect) {
            this.correctCount++;
            this.streak++;
        } else {
            this.streak = 0;
        }

        return {
            correct: isCorrect,
            points,
            streak: this.streak,
            correctAnswer: question.answers.find(a => a.correct)
        };
    }

    /**
     * Calculate time bonus (0-100 points based on speed)
     */
    calculateTimeBonus() {
        if (!this.questionStartTime) return 0;

        const timeTaken = (Date.now() - this.questionStartTime) / 1000;
        const timeRemaining = Math.max(0, this.timePerQuestion - timeTaken);
        const bonus = Math.floor((timeRemaining / this.timePerQuestion) * 100);

        return bonus;
    }

    /**
     * Move to next question
     */
    nextQuestion() {
        this.currentQuestionIndex++;
        return this.currentQuestionIndex < this.questions.length;
    }

    /**
     * Check if game is over
     */
    isGameOver() {
        return this.currentQuestionIndex >= this.questions.length;
    }

    /**
     * Get game results
     */
    getResults() {
        const totalTime = (Date.now() - this.startTime) / 1000;
        const accuracy = Math.round((this.correctCount / this.questions.length) * 100);

        // Calculate XP earned
        const baseXP = this.correctCount * (this.currentDifficulty === 'hardcore' ? 200 : 100);
        const streakBonus = this.streak * 10;
        const accuracyBonus = accuracy === 100 ? 200 : 0;
        const totalXP = baseXP + streakBonus + accuracyBonus;

        // Get albums played
        const albumsPlayed = new Set(
            this.questions.map(q => q.correctSong.album)
        );

        // Update stats
        const gameData = {
            mode: this.currentMode,
            correct: this.correctCount,
            total: this.questions.length,
            difficulty: this.currentDifficulty,
            timeTaken: Math.floor(totalTime),
            albumsPlayed
        };

        const newBadges = this.statsManager.updateGameStats(gameData);
        const levelInfo = this.statsManager.addXP(totalXP);

        return {
            score: this.score,
            correct: this.correctCount,
            total: this.questions.length,
            accuracy,
            xpEarned: totalXP,
            timeTaken: Math.floor(totalTime),
            bestStreak: this.streak,
            newBadges,
            levelInfo
        };
    }

    /**
     * Helper: Shuffle array
     */
    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    /**
     * Helper: Get random songs excluding a specific one
     */
    getRandomSongs(songs, exclude, count) {
        const filtered = songs.filter(s => s.id !== exclude.id);
        return this.shuffleArray(filtered).slice(0, count);
    }

    /**
     * Helper: Get random album names
     */
    getRandomAlbums(exclude, count) {
        const albums = [...new Set(ALBUMS_DATABASE.map(a => a.name))];
        const filtered = albums.filter(a => a !== exclude);
        return this.shuffleArray(filtered).slice(0, count);
    }

    /**
     * Helper: Get random albums with their cover images
     */
    getRandomAlbumsWithCovers(exclude, count) {
        const filtered = ALBUMS_DATABASE.filter(a => a.name !== exclude);
        return this.shuffleArray(filtered).slice(0, count);
    }

    /**
     * Get progress
     */
    getProgress() {
        return {
            current: this.currentQuestionIndex + 1,
            total: this.questions.length,
            score: this.score,
            streak: this.streak
        };
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = GameEngine;
}
