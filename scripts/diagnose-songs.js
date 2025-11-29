const fs = require('fs');
const path = require('path');

// Load songs database
const { SONGS_DATABASE } = require('../js/data/songs.js');

// Helper to check file size
function checkFileSize(filePath) {
    try {
        const stats = fs.statSync(filePath);
        return stats.size;
    } catch (e) {
        return 'MISSING';
    }
}

// Check specific songs
const songsToCheck = ['Back at It', 'Like Me', 'Bliss', 'Kyoto'];

console.log('--- DIAGNOSTIC REPORT ---');

const allSongs = [...SONGS_DATABASE.normal, ...SONGS_DATABASE.hardcore];

songsToCheck.forEach(title => {
    const song = allSongs.find(s => s.title === title);
    if (song) {
        console.log(`\nSong: ${title}`);
        console.log(`  Album: ${song.album}`);
        console.log(`  Chorus Start: ${song.chorusStart} (${typeof song.chorusStart})`);
        console.log(`  Audio Path: ${song.localAudioPath}`);

        const size = checkFileSize(song.localAudioPath);
        console.log(`  File Size: ${size} bytes`);

        if (size < 100000) {
            console.log('  ⚠️ WARNING: File seems too small!');
        }
    } else {
        console.log(`\nSong: ${title} NOT FOUND`);
    }
});

console.log('\n--- END REPORT ---');
