// Script to add chorus start times to all songs
const fs = require('fs');

// Read songs.js
let content = fs.readFileSync('js/data/songs.js', 'utf8');

// Count songs before
const beforeMatches = content.match(/chorusStart:/g);
const beforeCount = beforeMatches ? beforeMatches.length : 0;

// Add chorusStart: 40 to songs that don't have it
// Match songs that have localAudioPath but NO chorusStart
const regex = /(title: '[^']+',\s+album: '[^']+',\s+year: \d+,\s+difficulty: '[^']+',\s+localAudioPath: '[^']+',)(?!\s*chorusStart:)/g;

content = content.replace(regex, `$1\n            chorusStart: 40,`);

// Count songs after
const afterMatches = content.match(/chorusStart:/g);
const afterCount = afterMatches ? afterMatches.length : 0;

// Write back
fs.writeFileSync('js/data/songs.js', content, 'utf8');

console.log('✅ Chorus start times added!');
console.log(`   Before: ${beforeCount} songs with chorusStart`);
console.log(`   After: ${afterCount} songs with chorusStart`);
console.log(`   Added: ${afterCount - beforeCount} new chorusStart entries`);
