// ===================================
// LEANYFI - Lyric Quiz Mode
// Coming soon - placeholder for now
// ===================================

class LyricQuizMode {
    constructor(gameEngine, audioPlayer, uiManager) {
        this.gameEngine = gameEngine;
        this.audioPlayer = audioPlayer;
        this.uiManager = uiManager;
    }

    /**
     * Start lyric quiz game
     */
    async start() {
        this.uiManager.showError('Lyric Quiz mode coming soon!');
        return false;
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = LyricQuizMode;
}
