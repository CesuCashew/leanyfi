// Script to update album covers to use local images
const fs = require('fs');

// Album cover paths - now using LOCAL images!
const ALBUM_COVERS = {
    'Jonatan': 'assets/images/albums/jonatan.jpg',
    'Starz': 'assets/images/albums/starz.jpg',
    'Warlord': 'assets/images/albums/warlord.jpg',
    'Warlord (Deluxe)': 'assets/images/albums/warlord.jpg',
    'Stranger': 'assets/images/albums/stranger.jpg',
    'Frost God': 'assets/images/albums/stranger.jpg',
    'Stardust': 'assets/images/albums/stardust.jpg',
    'Poison Ivy': 'assets/images/albums/poison_ivy.jpg',
    'Kyoto - Single': 'assets/images/albums/kyoto_single.jpg',
    'Creep Creeps - Single': 'assets/images/albums/creep_creeps.jpg',
    'Psykos': 'assets/images/albums/psykos.jpg',
    'Violent Lullaby - Single': 'assets/images/albums/violent_lullaby.jpg',
    'Blue Plastic - Single': 'assets/images/albums/blue_plastic.jpg',
    'Red Velvet - Single': 'assets/images/albums/red_velvet.jpg',
    'Lavender - Single': 'assets/images/albums/lavender.jpg',
    'First Class - Single': 'assets/images/albums/first_class.jpg',
    'True Love - Single': 'assets/images/albums/true_love.jpg',
    'Opium Dreams - Single': 'assets/images/albums/opium_dreams.jpg',
    'Unknown Death 2002': 'https://ia800305.us.archive.org/6/items/Yung_Lean_-_Unknown_Death_2002/cover.jpg',
    'Unknown Memory': 'https://archive.org/download/mbid-2f6fffcd-92a4-4d48-9518-b5e4c757c179/mbid-2f6fffcd-92a4-4d48-9518-b5e4c757c179-29542834817_itemimage.jpg'
};

// Read songs.js
let content = fs.readFileSync('js/data/songs.js', 'utf8');

// Replace album covers
Object.keys(ALBUM_COVERS).forEach(albumName => {
    // Match: album: 'AlbumName', ... albumCover: 'OLD_URL',
    const regex = new RegExp(
        `(album: '${albumName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}',[^}]*albumCover: ')[^']+(')`, 'g'
    );

    const replacement = `$1${ALBUM_COVERS[albumName]}$2`;
    content = content.replace(regex, replacement);
});

// Write back
fs.writeFileSync('js/data/songs.js', content, 'utf8');
console.log('✅ Updated to local album covers!');
