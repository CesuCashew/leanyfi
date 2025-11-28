# 🎵 Leanyfi

**Yung Lean Music Quiz Game** - Test your knowledge of Yung Lean's discography!

![Sad Boys](https://img.shields.io/badge/Sad%20Boys-Forever-ff6b9d?style=for-the-badge)
![Vaporwave](https://img.shields.io/badge/Aesthetic-Vaporwave-a78bfa?style=for-the-badge)

---

## 🎮 Features

- 🎵 **Song Recognition** - Guess the track in 5 seconds (Normal + Hardcore modes)
- 💿 **Album Recognition** - Identify which album a song is from
- 🏆 **12 Achievements** - Unlock badges as you play
- 📊 **Stats Tracking** - Track your progress and accuracy
- ⭐ **50 Levels** - Level up from Sad Boy to Drain God
- 🎨 **Vaporwave Aesthetic** - Glassmorphism, glitch effects, neon colors
- 📱 **Responsive** - Works on mobile, tablet, and desktop

---

## 🚀 Quick Start

### 1. Clone or Download

Download this project to your computer.

### 2. Setup Audio (Required)

Choose one or both methods:

#### Option A: Spotify API (Recommended for Normal Mode)

1. Go to [Spotify for Developers](https://developer.spotify.com/dashboard)
2. Create an app and get your **Client ID** and **Client Secret**
3. Open `js/api/spotify.js`
4. Replace the credentials:
   ```javascript
   const spotifyAPI = new SpotifyAPI(
       'YOUR_CLIENT_ID',
       'YOUR_CLIENT_SECRET'
   );
   ```

#### Option B: Local Files (For Hardcore Mode)

1. Install [yt-dlp](https://github.com/yt-dlp/yt-dlp):
   ```powershell
   winget install yt-dlp
   ```

2. Edit `download_unreleased.ps1` and add YouTube URLs

3. Run the script:
   ```powershell
   .\download_unreleased.ps1
   ```

4. Update `js/data/songs.js` with actual filenames

📖 **Detailed instructions**: See [Audio Setup Guide](audio_setup_guide.md)

### 3. Run the App

**Option 1**: Open `index.html` directly in your browser

**Option 2**: Use a local server (recommended):
```powershell
python -m http.server 8000
```
Then open: `http://localhost:8000`

---

## 📁 Project Structure

```
leanyfi/
├── index.html              # Main HTML file
├── styles/
│   ├── index.css          # Design system
│   ├── components.css     # Component styles
│   └── animations.css     # Animations & effects
├── js/
│   ├── api/
│   │   └── spotify.js     # Spotify API integration
│   ├── data/
│   │   ├── songs.js       # Song database
│   │   ├── albums.js      # Album information
│   │   └── badges.js      # Achievements
│   ├── core/
│   │   ├── AudioPlayer.js # Audio playback
│   │   ├── GameEngine.js  # Game logic
│   │   └── StatsManager.js # Stats tracking
│   ├── ui/
│   │   └── UIManager.js   # UI updates
│   ├── modes/
│   │   ├── SongRecognition.js
│   │   ├── AlbumRecognition.js
│   │   └── LyricQuiz.js
│   └── app.js             # Main application
└── assets/
    └── audio/
        ├── normal/        # Spotify (via API)
        └── hardcore/      # Unreleased tracks
```

---

## 🎯 How to Play

1. **Click "Start Playing"** on the landing page
2. **Select a game mode**:
   - Song Recognition (Normal/Hardcore)
   - Album Recognition
3. **Listen** to the 5-second audio clip
4. **Choose** the correct answer from 4 options
5. **Earn XP** and unlock badges!

### Keyboard Shortcuts

- **ESC** - Go back / Quit game
- **1-4** - Select answer during game

---

## 🏆 Achievements

- 🌟 **Sad Boy** - Complete first quiz
- 💎 **Ginseng Master** - 10 correct in a row
- 🎭 **Unknown Legend** - Play all albums
- ⭐ **Stardust Collector** - Unlock all badges
- 💔 **Emotional Damage** - 100 total correct
- 🌸 **Kyoto Speedrun** - Complete quiz under 30s
- 🔥 **Hardcore Drainer** - 50 correct on Hardcore
- 💯 **Perfect Score** - 100% accuracy
- 📚 **Yung Lean Scholar** - 50 games played
- 🌊 **Cloud Rapper** - Reach level 10
- 👑 **Sad Boys Veteran** - 100 games played
- 🎯 **Accuracy King** - 90% accuracy over 20 games

---

## 🎨 Design

**Color Palette**:
- Primary: `#0a0a0f` (Deep dark)
- Accent Pink: `#ff6b9d` (Sad Boys)
- Accent Blue: `#4ecdc4` (Vaporwave)
- Accent Purple: `#a78bfa`

**Typography**:
- Headings: Orbitron (futuristic)
- Body: Inter (clean)
- Retro: VT323 (monospace)

**Effects**:
- Glassmorphism cards
- Glitch animations
- VHS overlay
- Neon glows
- Particle effects

---

## 🔧 Technologies

- Vanilla HTML5, CSS3, JavaScript
- Spotify Web API
- HTML5 Audio API
- LocalStorage for persistence
- CSS Grid & Flexbox

---

## 📝 To-Do

- [ ] Add Lyric Quiz mode
- [ ] Implement multiplayer
- [ ] Add daily challenges
- [ ] Create leaderboards
- [ ] Social sharing
- [ ] Mobile app (React Native)

---

## 🐛 Troubleshooting

### Audio not playing?

- Check browser console for errors
- Verify Spotify credentials
- Check that local files exist
- Try using a local server instead of file://

### Spotify API not working?

- Verify Client ID and Secret
- Check internet connection
- Look for CORS errors in console

### Local files not loading?

- Use a local server (not file://)
- Check file paths in `songs.js`
- Verify MP3 format

---

## 📄 License

This is a fan project for educational purposes.

All Yung Lean music and trademarks belong to their respective owners.

---

## 💔 Credits

**Inspired by**: [Muzify.com](https://muzify.com)

**For**: Yung Lean fans worldwide

**Sad Boys forever** 🌸⭐

---

## 🔗 Links

- [Yung Lean on Spotify](https://open.spotify.com/artist/5nPOO9iTcrs9k6yFffPxjh)
- [Spotify for Developers](https://developer.spotify.com/)
- [yt-dlp](https://github.com/yt-dlp/yt-dlp)

---

Made with 💔 by a Sad Boy
