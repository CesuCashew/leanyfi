// ===================================
// LEANYFI - Main Application
// Initializes and orchestrates all modules
// ===================================

// Global instances
let audioPlayer;
let statsManager;
let gameEngine;
let uiManager;
let songRecognitionMode;
let albumRecognitionMode;
let lyricQuizMode;

// Current game state
let currentDifficulty = 'normal';

/**
 * Initialize application
 */
async function initApp() {
    console.log('🎵 Initializing Leanyfi...');

    // Initialize core modules
    audioPlayer = new AudioPlayer();
    statsManager = new StatsManager();
    gameEngine = new GameEngine(audioPlayer, statsManager);
    uiManager = new UIManager();

    // Initialize game modes
    songRecognitionMode = new SongRecognitionMode(gameEngine, audioPlayer, uiManager);
    albumRecognitionMode = new AlbumRecognitionMode(gameEngine, audioPlayer, uiManager);
    lyricQuizMode = new LyricQuizMode(gameEngine, audioPlayer, uiManager);

    // Load Spotify data (if configured)
    if (typeof spotifyAPI !== 'undefined') {
        try {
            console.log('📡 Loading Spotify data...');
            await spotifyAPI.updateSongsDatabase();
        } catch (error) {
            console.warn('⚠️ Failed to load Spotify data:', error);
            console.log('💡 App will work with local data only');
        }
    } else {
        console.log('💡 Spotify API not configured - using local data only');
    }

    // Setup event listeners
    setupEventListeners();

    // Update landing screen with stats
    updateLandingScreen();

    console.log('✅ Leanyfi initialized successfully!');
}

/**
 * Setup all event listeners
 */
function setupEventListeners() {
    // === Landing Screen ===
    document.getElementById('start-btn').addEventListener('click', () => {
        uiManager.showScreen('mode');
    });

    document.getElementById('stats-btn').addEventListener('click', () => {
        updateStatsScreen();
        uiManager.showScreen('stats');
    });

    // === Mode Selection Screen ===
    document.getElementById('back-to-landing').addEventListener('click', () => {
        uiManager.showScreen('landing');
        updateLandingScreen();
    });

    // Difficulty selector buttons
    document.querySelectorAll('.difficulty-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Remove active from all
            document.querySelectorAll('.difficulty-btn').forEach(b => b.classList.remove('active'));
            // Add active to clicked
            e.target.classList.add('active');
            // Update current difficulty
            currentDifficulty = e.target.dataset.difficulty;
        });
    });

    // Mode cards - Play buttons
    document.querySelectorAll('.mode-card .btn-primary').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const modeCard = e.target.closest('.mode-card');
            const mode = modeCard.dataset.mode;

            if (modeCard.classList.contains('locked')) {
                uiManager.showError('This mode is coming soon!');
                return;
            }

            startGame(mode);
        });
    });

    // === Game Screen ===
    document.getElementById('back-to-modes').addEventListener('click', () => {
        audioPlayer.stop();
        if (songRecognitionMode.answerTimer) {
            songRecognitionMode.stopAnswerTimer();
        }
        if (albumRecognitionMode.answerTimer) {
            albumRecognitionMode.stopAnswerTimer();
        }
        uiManager.showScreen('mode');
    });

    // === Results Screen ===
    document.getElementById('play-again-btn').addEventListener('click', () => {
        // Replay same mode
        const lastMode = gameEngine.currentMode;
        startGame(lastMode);
    });

    document.getElementById('change-mode-btn').addEventListener('click', () => {
        uiManager.showScreen('mode');
    });

    // === Stats Screen ===
    document.getElementById('back-from-stats').addEventListener('click', () => {
        uiManager.showScreen('landing');
        updateLandingScreen();
    });
}

/**
 * Start a game with the selected mode
 */
async function startGame(mode) {
    console.log(`Starting game: ${mode} (${currentDifficulty})`);

    try {
        if (mode === 'song-recognition') {
            await songRecognitionMode.start(currentDifficulty);
        } else if (mode === 'album-recognition') {
            await albumRecognitionMode.start();
        } else if (mode === 'lyric-quiz') {
            await lyricQuizMode.start();
        }
    } catch (error) {
        console.error('Error starting game:', error);
        uiManager.showError('Failed to start game. Please try again.');
    }
}

/**
 * Update landing screen with current stats
 */
function updateLandingScreen() {
    const stats = statsManager.getStats();
    uiManager.updateLandingStats(stats);
}

/**
 * Update stats screen
 */
function updateStatsScreen() {
    const stats = statsManager.getStats();
    uiManager.updateStatsScreen(stats, statsManager);
}

/**
 * Handle keyboard shortcuts
 */
document.addEventListener('keydown', (e) => {
    // ESC to go back
    if (e.key === 'Escape') {
        const currentScreen = uiManager.currentScreen;
        if (currentScreen === 'mode') {
            uiManager.showScreen('landing');
        } else if (currentScreen === 'stats') {
            uiManager.showScreen('landing');
        } else if (currentScreen === 'game') {
            // Confirm before quitting game
            if (confirm('Are you sure you want to quit the current game?')) {
                audioPlayer.stop();
                uiManager.showScreen('mode');
            }
        }
    }

    // Number keys (1-4) to select answers during game
    if (uiManager.currentScreen === 'game' && ['1', '2', '3', '4'].includes(e.key)) {
        const index = parseInt(e.key) - 1;
        const buttons = document.querySelectorAll('.answer-btn');
        if (buttons[index] && !buttons[index].disabled) {
            buttons[index].click();
        }
    }
});

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}

// Prevent accidental page refresh during game
window.addEventListener('beforeunload', (e) => {
    if (uiManager && uiManager.currentScreen === 'game') {
        e.preventDefault();
        e.returnValue = '';
    }
});

console.log('🎮 Leanyfi loaded - Sad Boys forever 💔');
