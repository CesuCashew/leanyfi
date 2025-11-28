// ===================================
// LEANYFI - Album Recognition Mode
// ===================================

class AlbumRecognitionMode {
    constructor(gameEngine, audioPlayer, uiManager) {
        this.gameEngine = gameEngine;
        this.audioPlayer = audioPlayer;
        this.uiManager = uiManager;
        this.answerTimer = null;
        this.timeRemaining = 10;
    }

    /**
     * Start album recognition game
     */
    async start() {
        const success = this.gameEngine.startGame('albumRecognition', 'normal');

        if (!success) {
            this.uiManager.showError('No songs available');
            return false;
        }

        this.uiManager.showScreen('game');
        await this.playNextQuestion();

        return true;
    }

    /**
     * Play next question
     */
    async playNextQuestion() {
        const question = this.gameEngine.getCurrentQuestion();
        const progress = this.gameEngine.getProgress();

        // Update UI
        this.uiManager.updateGameScreen(question, progress);

        // Reset timer
        this.timeRemaining = 10;
        this.startAnswerTimer();

        // Play audio
        this.uiManager.animateWaveform(true);
        await this.gameEngine.playCurrentQuestion();
        // Keep waveform animating while audio plays

        // Setup answer buttons
        this.setupAnswerButtons();
    }

    /**
     * Setup answer button listeners
     */
    setupAnswerButtons() {
        const buttons = document.querySelectorAll('.answer-btn');
        const question = this.gameEngine.getCurrentQuestion();

        buttons.forEach((button, index) => {
            button.addEventListener('click', () => {
                this.handleAnswer(button, question.answers[index]);
            }, { once: true });
        });
    }

    /**
     * Handle answer selection
     */
    async handleAnswer(button, answer) {
        this.stopAnswerTimer();

        // Stop waveform animation
        this.uiManager.animateWaveform(false);

        const result = this.gameEngine.submitAnswer(answer);

        // Show feedback
        this.uiManager.showAnswerFeedback(button, result.correct, result.correctAnswer);

        // Wait before next question
        await this.delay(2000);

        // Check if game is over
        if (this.gameEngine.nextQuestion()) {
            await this.playNextQuestion();
        } else {
            this.endGame();
        }
    }

    /**
     * Start answer timer
     */
    startAnswerTimer() {
        this.answerTimer = setInterval(() => {
            this.timeRemaining--;
            this.uiManager.updateTimer(this.timeRemaining, 10);

            if (this.timeRemaining <= 0) {
                this.stopAnswerTimer();
                this.handleAnswer(null, null);
            }
        }, 1000);
    }

    /**
     * Stop answer timer
     */
    stopAnswerTimer() {
        if (this.answerTimer) {
            clearInterval(this.answerTimer);
            this.answerTimer = null;
        }
    }

    /**
     * End game and show results
     */
    endGame() {
        const results = this.gameEngine.getResults();
        this.uiManager.updateResultsScreen(results);
        this.uiManager.showScreen('results');
    }

    /**
     * Helper: Delay function
     */
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AlbumRecognitionMode;
}
