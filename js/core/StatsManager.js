// ===================================
// LEANYFI - Stats Manager
// Handles statistics tracking and persistence
// ===================================

class StatsManager {
    constructor() {
        this.stats = this.loadStats();
    }

    /**
     * Load stats from localStorage
     */
    loadStats() {
        const savedStats = localStorage.getItem('leanyfi_stats');
        if (savedStats) {
            return JSON.parse(savedStats);
        }

        // Default stats
        return {
            totalGames: 0,
            correctAnswers: 0,
            totalAnswers: 0,
            accuracy: 0,
            currentStreak: 0,
            bestStreak: 0,
            xp: 0,
            level: 1,
            badgesUnlocked: [],
            albumsPlayed: new Set(),
            hardcoreCorrect: 0,
            perfectGames: 0,
            fastestQuiz: null,
            lastPlayed: null,
            modeStats: {
                songRecognition: { played: 0, correct: 0 },
                albumRecognition: { played: 0, correct: 0 },
                lyricQuiz: { played: 0, correct: 0 }
            }
        };
    }

    /**
     * Save stats to localStorage
     */
    saveStats() {
        // Convert Set to Array for JSON serialization
        const statsToSave = {
            ...this.stats,
            albumsPlayed: Array.from(this.stats.albumsPlayed)
        };
        localStorage.setItem('leanyfi_stats', JSON.stringify(statsToSave));
    }

    /**
     * Update stats after a game
     */
    updateGameStats(gameData) {
        const {
            mode,
            correct,
            total,
            difficulty,
            timeTaken,
            albumsPlayed
        } = gameData;

        // Update total games
        this.stats.totalGames++;

        // Update answers
        this.stats.correctAnswers += correct;
        this.stats.totalAnswers += total;

        // Update accuracy
        this.stats.accuracy = Math.round((this.stats.correctAnswers / this.stats.totalAnswers) * 100);

        // Update streak
        if (correct === total) {
            this.stats.currentStreak += correct;
            if (this.stats.currentStreak > this.stats.bestStreak) {
                this.stats.bestStreak = this.stats.currentStreak;
            }
        } else {
            this.stats.currentStreak = 0;
        }

        // Update hardcore stats
        if (difficulty === 'hardcore') {
            this.stats.hardcoreCorrect += correct;
        }

        // Update perfect games
        if (correct === total) {
            this.stats.perfectGames++;
        }

        // Update fastest quiz
        if (!this.stats.fastestQuiz || timeTaken < this.stats.fastestQuiz) {
            this.stats.fastestQuiz = timeTaken;
        }

        // Update albums played
        if (albumsPlayed) {
            albumsPlayed.forEach(album => {
                if (!this.stats.albumsPlayed) {
                    this.stats.albumsPlayed = new Set();
                }
                this.stats.albumsPlayed.add(album);
            });
        }

        // Update mode stats
        if (this.stats.modeStats[mode]) {
            this.stats.modeStats[mode].played++;
            this.stats.modeStats[mode].correct += correct;
        }

        // Update last played
        this.stats.lastPlayed = new Date().toISOString();

        // Save to localStorage
        this.saveStats();

        // Check for new badges
        return this.checkNewBadges();
    }

    /**
     * Add XP and check for level up
     */
    addXP(amount) {
        this.stats.xp += amount;

        // Check for level up
        const newLevel = this.calculateLevel(this.stats.xp);
        const leveledUp = newLevel > this.stats.level;

        if (leveledUp) {
            this.stats.level = newLevel;
        }

        this.saveStats();

        return {
            leveledUp,
            newLevel: this.stats.level,
            currentXP: this.stats.xp,
            nextLevelXP: this.getXPForNextLevel()
        };
    }

    /**
     * Calculate level based on XP
     */
    calculateLevel(xp) {
        let level = 1;
        let requiredXP = 0;

        while (requiredXP <= xp) {
            level++;
            requiredXP += getXPForLevel(level);
        }

        return level - 1;
    }

    /**
     * Get XP required for next level
     */
    getXPForNextLevel() {
        return getXPForLevel(this.stats.level + 1);
    }

    /**
     * Get XP progress to next level (0-1)
     */
    getXPProgress() {
        const currentLevelXP = getXPForLevel(this.stats.level);
        const nextLevelXP = this.getXPForNextLevel();
        const xpInCurrentLevel = this.stats.xp - currentLevelXP;
        const xpNeededForLevel = nextLevelXP - currentLevelXP;

        return xpInCurrentLevel / xpNeededForLevel;
    }

    /**
     * Check for newly unlocked badges
     */
    checkNewBadges() {
        const newBadges = [];

        BADGES_DATABASE.forEach(badge => {
            // Check if badge is not already unlocked
            if (!this.stats.badgesUnlocked.includes(badge.id)) {
                // Check if condition is met
                if (badge.condition(this.stats)) {
                    this.stats.badgesUnlocked.push(badge.id);
                    newBadges.push(badge);

                    // Add XP reward
                    this.addXP(badge.xpReward);
                }
            }
        });

        if (newBadges.length > 0) {
            this.saveStats();
        }

        return newBadges;
    }

    /**
     * Get all stats
     */
    getStats() {
        return this.stats;
    }

    /**
     * Get specific stat
     */
    getStat(key) {
        return this.stats[key];
    }

    /**
     * Reset all stats (for testing or user request)
     */
    resetStats() {
        if (confirm('Are you sure you want to reset all stats? This cannot be undone.')) {
            localStorage.removeItem('leanyfi_stats');
            this.stats = this.loadStats();
            return true;
        }
        return false;
    }

    /**
     * Get level title
     */
    getLevelTitle() {
        return getLevelTitle(this.stats.level);
    }

    /**
     * Get unlocked badges
     */
    getUnlockedBadges() {
        return BADGES_DATABASE.filter(badge =>
            this.stats.badgesUnlocked.includes(badge.id)
        );
    }

    /**
     * Get locked badges
     */
    getLockedBadges() {
        return BADGES_DATABASE.filter(badge =>
            !this.stats.badgesUnlocked.includes(badge.id)
        );
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = StatsManager;
}
