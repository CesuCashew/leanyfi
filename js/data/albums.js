// ===================================
// LEANYFI - Albums Database
// ===================================

const ALBUMS_DATABASE = [
    {
        id: 'unknown_death',
        name: 'Unknown Death 2002',
        year: 2013,
        coverUrl: 'assets/images/albums/unknown_death_2002.jpg',
        trackCount: 17,
        era: 'Early Sad Boys',
        description: 'Debut mixtape that launched Yung Lean into internet fame'
    },
    {
        id: 'unknown_memory',
        name: 'Unknown Memory',
        year: 2014,
        coverUrl: 'assets/images/albums/unknown_memory.jpg',
        trackCount: 15,
        era: 'Unknown Memory',
        description: 'First studio album featuring Yoshi City and Ghosttown'
    },
    {
        id: 'warlord',
        name: 'Warlord',
        year: 2016,
        coverUrl: 'assets/images/albums/warlord.jpg',
        trackCount: 14,
        era: 'Warlord',
        description: 'Second studio album with darker, more mature sound'
    },
    {
        id: 'stranger',
        name: 'Stranger',
        year: 2017,
        coverUrl: 'assets/images/albums/stranger.jpg',
        trackCount: 12,
        era: 'Stranger',
        description: 'Critically acclaimed album marking artistic evolution'
    },
    {
        id: 'poison_ivy',
        name: 'Poison Ivy',
        year: 2018,
        coverUrl: 'assets/images/albums/poison_ivy.jpg',
        trackCount: 9,
        era: 'Stranger',
        description: 'EP featuring Red Velvet and Happy Feet'
    },
    {
        id: 'starz',
        name: 'Starz',
        year: 2020,
        coverUrl: 'assets/images/albums/starz.jpg',
        trackCount: 16,
        era: 'Starz',
        description: 'Fourth studio album with Boylife in EU and Pikachu'
    },
    {
        id: 'stardust',
        name: 'Stardust',
        year: 2022,
        coverUrl: 'assets/images/albums/stardust.jpg',
        trackCount: 16,
        era: 'Stardust',
        description: 'Latest album featuring remastered classics and new tracks'
    }
];

// Function to get album by ID
function getAlbumById(id) {
    return ALBUMS_DATABASE.find(album => album.id === id);
}

// Function to get album by name
function getAlbumByName(name) {
    return ALBUMS_DATABASE.find(album => album.name === name);
}

// Function to get random album
function getRandomAlbum() {
    return ALBUMS_DATABASE[Math.floor(Math.random() * ALBUMS_DATABASE.length)];
}

// Function to get albums by era
function getAlbumsByEra(era) {
    return ALBUMS_DATABASE.filter(album => album.era === era);
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        ALBUMS_DATABASE,
        getAlbumById,
        getAlbumByName,
        getRandomAlbum,
        getAlbumsByEra
    };
}
