// ===================================
// LEANYFI - Badges & Achievements
// ===================================

const BADGES_DATABASE = [
    {
        id: 'sad_boy',
        name: 'Sad Boy',
        icon: '🌟',
        description: 'Complete your first quiz',
        condition: (stats) => stats.totalGames >= 1,
        xpReward: 50
    },
    {
        id: 'ginseng_master',
        name: 'Ginseng Master',
        icon: '💎',
        description: 'Get 10 correct answers in a row',
        condition: (stats) => stats.bestStreak >= 10,
        xpReward: 200
    },
    {
        id: 'unknown_legend',
        name: 'Unknown Legend',
        icon: '🎭',
        description: 'Play songs from all albums',
        condition: (stats) => stats.albumsPlayed?.size >= 7,
        xpReward: 300
    },
    {
        id: 'stardust_collector',
        name: 'Stardust Collector',
        icon: '⭐',
        description: 'Unlock all other badges',
        condition: (stats) => stats.badgesUnlocked?.length >= 11,
        xpReward: 500
    },
    {
        id: 'emotional_damage',
        name: 'Emotional Damage',
        icon: '💔',
        description: 'Get 100 total correct answers',
        condition: (stats) => stats.correctAnswers >= 100,
        xpReward: 250
    },
    {
        id: 'kyoto_speedrun',
        name: 'Kyoto Speedrun',
        icon: '🌸',
        description: 'Complete a quiz in under 30 seconds',
        condition: (stats) => stats.fastestQuiz && stats.fastestQuiz <= 30,
        xpReward: 150
    },
    {
        id: 'hardcore_drainer',
        name: 'Hardcore Drainer',
        icon: '🔥',
        description: 'Get 50 correct answers on Hardcore mode',
        condition: (stats) => stats.hardcoreCorrect >= 50,
        xpReward: 400
    },
    {
        id: 'perfect_score',
        name: 'Perfect Score',
        icon: '💯',
        description: 'Get 100% accuracy in a quiz',
        condition: (stats) => stats.perfectGames >= 1,
        xpReward: 200
    },
    {
        id: 'yung_lean_scholar',
        name: 'Yung Lean Scholar',
        icon: '📚',
        description: 'Play 50 total games',
        condition: (stats) => stats.totalGames >= 50,
        xpReward: 300
    },
    {
        id: 'cloud_rapper',
        name: 'Cloud Rapper',
        icon: '🌊',
        description: 'Reach level 10',
        condition: (stats) => stats.level >= 10,
        xpReward: 250
    },
    {
        id: 'sad_boys_veteran',
        name: 'Sad Boys Veteran',
        icon: '👑',
        description: 'Play 100 total games',
        condition: (stats) => stats.totalGames >= 100,
        xpReward: 500
    },
    {
        id: 'accuracy_king',
        name: 'Accuracy King',
        icon: '🎯',
        description: 'Maintain 90% accuracy over 20 games',
        condition: (stats) => stats.totalGames >= 20 && stats.accuracy >= 90,
        xpReward: 350
    }
];

// Level titles based on Yung Lean songs/themes
const LEVEL_TITLES = {
    1: 'Sad Boy',
    5: 'Ginseng Sipper',
    10: 'Unknown Memory',
    15: 'Yoshi City Dweller',
    20: 'Warlord',
    25: 'Stranger',
    30: 'Miami Ultra',
    35: 'Silver Arrow',
    40: 'Starz Collector',
    45: 'Stardust Legend',
    50: 'Drain God'
};

// XP required for each level (exponential growth)
function getXPForLevel(level) {
    return Math.floor(100 * Math.pow(1.15, level - 1));
}

// Get level title
function getLevelTitle(level) {
    // Find the highest level title that applies
    const levels = Object.keys(LEVEL_TITLES).map(Number).sort((a, b) => b - a);
    for (const lvl of levels) {
        if (level >= lvl) {
            return LEVEL_TITLES[lvl];
        }
    }
    return LEVEL_TITLES[1];
}

// Check if badge is unlocked
function checkBadgeUnlock(badgeId, stats) {
    const badge = BADGES_DATABASE.find(b => b.id === badgeId);
    return badge ? badge.condition(stats) : false;
}

// Get all unlocked badges
function getUnlockedBadges(stats) {
    return BADGES_DATABASE.filter(badge => badge.condition(stats));
}

// Get locked badges
function getLockedBadges(stats) {
    return BADGES_DATABASE.filter(badge => !badge.condition(stats));
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        BADGES_DATABASE,
        LEVEL_TITLES,
        getXPForLevel,
        getLevelTitle,
        checkBadgeUnlock,
        getUnlockedBadges,
        getLockedBadges
    };
}
