// ===================================
// LEANYFI - UI Manager
// Handles all UI updates and screen transitions
// ===================================

class UIManager {
    constructor() {
        this.currentScreen = 'landing';
        this.screens = {
            landing: document.getElementById('landing-screen'),
            mode: document.getElementById('mode-screen'),
            game: document.getElementById('game-screen'),
            results: document.getElementById('results-screen'),
            stats: document.getElementById('stats-screen')
        };
    }

    /**
     * Show a specific screen
     */
    showScreen(screenName) {
        // Hide all screens
        Object.values(this.screens).forEach(screen => {
            screen.classList.remove('active');
        });

        // Show requested screen
        if (this.screens[screenName]) {
            this.screens[screenName].classList.add('active');
            this.currentScreen = screenName;
        }
    }

    /**
     * Update landing screen stats
     */
    updateLandingStats(stats) {
        document.getElementById('total-plays').textContent = stats.totalGames;
        document.getElementById('user-level').textContent = stats.level;
        document.getElementById('badges-count').textContent = stats.badgesUnlocked.length;
    }

    /**
     * Update game screen
     */
    updateGameScreen(question, progress) {
        // Update progress
        document.getElementById('current-question').textContent = progress.current;
        document.getElementById('total-questions').textContent = progress.total;
        document.getElementById('current-score').textContent = progress.score;
        document.getElementById('current-streak').textContent = progress.streak;

        // Update question
        document.getElementById('question-text').textContent = question.question;

        // Update answers
        const answersGrid = document.getElementById('answers-grid');
        answersGrid.innerHTML = '';

        question.answers.forEach((answer, index) => {
            const button = document.createElement('button');
            button.className = 'answer-btn';
            button.dataset.index = index;

            // Add album cover image
            const img = document.createElement('img');
            img.className = 'answer-album-cover';
            img.src = answer.song.albumCover || 'assets/images/placeholder.jpg';
            img.alt = answer.text;

            // Add song title
            const title = document.createElement('div');
            title.className = 'answer-title';
            title.textContent = answer.text;

            button.appendChild(img);
            button.appendChild(title);
            answersGrid.appendChild(button);
        });
    }

    /**
     * Show answer feedback
     */
    showAnswerFeedback(selectedButton, isCorrect, correctAnswer) {
        const allButtons = document.querySelectorAll('.answer-btn');
        allButtons.forEach(btn => btn.disabled = true);

        if (isCorrect) {
            if (selectedButton) {
                selectedButton.classList.add('correct');
                this.createParticles(selectedButton);
            }
        } else {
            if (selectedButton) {
                selectedButton.classList.add('incorrect');
            }

            // Show correct answer
            allButtons.forEach(btn => {
                const titleElement = btn.querySelector('.answer-title');
                if (titleElement && titleElement.textContent === correctAnswer.text) {
                    btn.classList.add('correct');
                }
            });
        }
    }

    /**
     * Update timer display
     */
    updateTimer(secondsRemaining, totalSeconds) {
        const timeCurrent = document.getElementById('time-current');
        const timeTotal = document.getElementById('time-total');
        const progressFill = document.getElementById('progress-fill');

        // Format time as MM:SS
        const formatTime = (seconds) => {
            const mins = Math.floor(seconds / 60);
            const secs = Math.floor(seconds % 60);
            return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        };

        const currentTime = totalSeconds - secondsRemaining;
        timeCurrent.textContent = formatTime(currentTime);
        timeTotal.textContent = formatTime(totalSeconds);

        // Update progress bar
        const progress = (currentTime / totalSeconds) * 100;
        progressFill.style.width = progress + '%';
    }

    /**
     * Animate waveform
     */
    animateWaveform(isPlaying) {
        const waveBars = document.querySelectorAll('.wave-bar');
        const playIcon = document.querySelector('.play-icon');

        waveBars.forEach(bar => {
            if (isPlaying) {
                bar.style.animationPlayState = 'running';
            } else {
                bar.style.animationPlayState = 'paused';
            }
        });

        // Update play/pause icon
        if (playIcon) {
            playIcon.innerHTML = isPlaying ? '&#10074;&#10074;' : '&#9654;';
        }
    }

    /**
     * Update results screen
     */
    updateResultsScreen(results) {
        document.getElementById('final-score').textContent = results.score;
        document.getElementById('max-score').textContent = results.total * 200; // Max possible
        document.getElementById('accuracy').textContent = results.accuracy + '%';
        document.getElementById('xp-earned').textContent = '+' + results.xpEarned;
        document.getElementById('best-streak').textContent = results.bestStreak;

        // Show new badges
        const badgesContainer = document.getElementById('badges-unlocked');
        badgesContainer.innerHTML = '';

        if (results.newBadges && results.newBadges.length > 0) {
            results.newBadges.forEach(badge => {
                const badgeElement = this.createBadgeElement(badge, true);
                badgesContainer.appendChild(badgeElement);
            });
        }

        // Show level up notification
        if (results.levelInfo && results.levelInfo.leveledUp) {
            const levelUpNotif = document.getElementById('level-up-notification');
            document.getElementById('new-level').textContent = results.levelInfo.newLevel;
            levelUpNotif.style.display = 'block';
        } else {
            document.getElementById('level-up-notification').style.display = 'none';
        }
    }

    /**
     * Update stats screen
     */
    updateStatsScreen(stats, statsManager) {
        // Update level display
        document.getElementById('profile-level').textContent = stats.level;
        document.getElementById('level-title').textContent = statsManager.getLevelTitle();

        // Update XP bar
        const xpProgress = statsManager.getXPProgress() * 100;
        document.getElementById('xp-progress').style.width = xpProgress + '%';
        document.getElementById('current-xp').textContent = stats.xp;
        document.getElementById('next-level-xp').textContent = statsManager.getXPForNextLevel();

        // Update stats
        document.getElementById('total-games').textContent = stats.totalGames;
        document.getElementById('correct-answers').textContent = stats.correctAnswers;
        document.getElementById('accuracy-stat').textContent = stats.accuracy + '%';
        document.getElementById('best-streak-stat').textContent = stats.bestStreak;

        // Update badges
        this.updateBadgesGrid(statsManager);
    }

    /**
     * Update badges grid
     */
    updateBadgesGrid(statsManager) {
        const badgesGrid = document.getElementById('badges-grid');
        badgesGrid.innerHTML = '';

        BADGES_DATABASE.forEach(badge => {
            const isUnlocked = statsManager.getStats().badgesUnlocked.includes(badge.id);
            const badgeCard = this.createBadgeCard(badge, isUnlocked);
            badgesGrid.appendChild(badgeCard);
        });
    }

    /**
     * Create badge element for results
     */
    createBadgeElement(badge, animate = false) {
        const div = document.createElement('div');
        div.className = 'badge-item' + (animate ? ' animate-slide-in' : '');
        div.innerHTML = `
            <div class="badge-icon">${badge.icon}</div>
            <div class="badge-info">
                <div class="badge-name">${badge.name}</div>
                <div class="badge-description">${badge.description}</div>
            </div>
        `;
        return div;
    }

    /**
     * Create badge card for stats screen
     */
    createBadgeCard(badge, unlocked) {
        const div = document.createElement('div');
        div.className = 'badge-card glass-card ' + (unlocked ? 'unlocked' : 'locked');
        div.innerHTML = `
            <div class="badge-icon">${badge.icon}</div>
            <div class="badge-name">${badge.name}</div>
            <div class="badge-description">${badge.description}</div>
        `;
        return div;
    }

    /**
     * Create particle effect
     */
    createParticles(element) {
        const rect = element.getBoundingClientRect();
        const particlesContainer = document.getElementById('particles');

        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = (rect.left + rect.width / 2) + 'px';
            particle.style.top = (rect.top + rect.height / 2) + 'px';
            particle.style.setProperty('--tx', (Math.random() - 0.5) * 200 + 'px');
            particle.style.setProperty('--ty', (Math.random() - 0.5) * 200 + 'px');

            particlesContainer.appendChild(particle);

            setTimeout(() => particle.remove(), 3000);
        }
    }

    /**
     * Show loading state
     */
    showLoading(message = 'Loading...') {
        // Could add a loading overlay here
        console.log(message);
    }

    /**
     * Hide loading state
     */
    hideLoading() {
        // Hide loading overlay
    }

    /**
     * Show error message
     */
    showError(message) {
        alert(message); // Simple for now, could be a nice modal
    }

    /**
     * Show success message
     */
    showSuccess(message) {
        // Could show a toast notification
        console.log('Success:', message);
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = UIManager;
}
