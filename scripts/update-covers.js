// Script to update album covers
const fs = require('fs');

const SONGS = [
    'Its Sad Boy (feat. Yung Lean)'
];

let content = fs.readFileSync('js/data/songs.js', 'utf8');

SONGS.forEach(songTitle => {
    const escapedTitle = songTitle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    const regexReplace = new RegExp(
        `(title: ["']${escapedTitle}["'],[^}]*albumCover: ')[^']+(')`, 'gi'
    );

    let newContent = content.replace(regexReplace, `$1assets/images/albums/its_sad_boy.jpg$2`);

    if (newContent !== content) {
        console.log(`✅ Updated: ${songTitle}`);
        content = newContent;
    } else {
        const regexAdd = new RegExp(
            `(title: ["']${escapedTitle}["'],[^}]*localAudioPath: '[^']+',)(?!\\s*albumCover:)`, 'gi'
        );

        newContent = content.replace(regexAdd, `$1\n            albumCover: 'assets/images/albums/its_sad_boy.jpg',`);

        if (newContent !== content) {
            console.log(`✅ Added: ${songTitle}`);
            content = newContent;
        } else {
            console.log(`⚠️  Not found: ${songTitle}`);
        }
    }
});

fs.writeFileSync('js/data/songs.js', content, 'utf8');
console.log('\n✅ Done!');
