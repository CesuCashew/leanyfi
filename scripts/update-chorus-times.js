// Script to update chorus times from 30 to 40
const fs = require('fs');

let content = fs.readFileSync('js/data/songs.js', 'utf8');

// Replace chorusStart: 30 with chorusStart: 40
// Also handle potential duplicates by removing the first one if two exist
// But simple replace is safer for now

// Count occurrences
const count30 = (content.match(/chorusStart: 30/g) || []).length;

// Replace
content = content.replace(/chorusStart: 30/g, 'chorusStart: 40');

// Also replace chorusStart: 35 (Kyoto)
content = content.replace(/chorusStart: 35/g, 'chorusStart: 40');

fs.writeFileSync('js/data/songs.js', content, 'utf8');

console.log(`✅ Updated ${count30} songs from 30s to 40s start time.`);
