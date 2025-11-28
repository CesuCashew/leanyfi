# Leanyfi - Implementation Plan

A Yung Lean music quiz web application inspired by Muzify.com, featuring multiple game modes, gamification, and authentic Sad Boys/vaporwave aesthetic.

## User Review Required

> [!IMPORTANT]
> **Audio Source Decision**: Using local audio files (MP3/WAV) instead of Spotify API for maximum flexibility. This allows us to include unreleased tracks from YouTube/SoundCloud for Hardcore mode. You'll need to provide or source these audio files.

> [!NOTE]
> **Content Scope**: Application will focus exclusively on Yung Lean solo tracks, excluding Sad Boys/Drain Gang collaborations unless Yung Lean is the primary artist.

## Proposed Changes

### Technical Architecture

**Stack**: Vanilla HTML, CSS, and JavaScript
- No framework needed for MVP
- Fast, lightweight, full control
- Easy to expand later if needed

**Key Technologies**:
- HTML5 Audio API for playback
- LocalStorage for progress/stats
- CSS Grid/Flexbox for layout
- CSS Variables for theming
- Vanilla JS for game logic

---

### Project Structure

#### [NEW] [index.html](file:///c:/Users/fhirt/Desktop/leanyfi/index.html)
Main application entry point with:
- Semantic HTML structure
- SEO meta tags
- Audio preloading
- Game container structure

#### [NEW] [styles/index.css](file:///c:/Users/fhirt/Desktop/leanyfi/styles/index.css)
Core design system with:
- CSS variables (colors, spacing, typography)
- Sad Boys/vaporwave color palette
- Dark mode first approach
- Glassmorphism utilities
- Animation keyframes

#### [NEW] [styles/components.css](file:///c:/Users/fhirt/Desktop/leanyfi/styles/components.css)
Component-specific styles:
- Button styles (primary, secondary, game answers)
- Card components with glassmorphism
- Modal/overlay styles
- Badge/achievement cards
- Audio player controls

#### [NEW] [styles/animations.css](file:///c:/Users/fhirt/Desktop/leanyfi/styles/animations.css)
Visual effects and animations:
- Glitch effects
- VHS/retro filters
- Fade/slide transitions
- Particle effects
- Hover animations

---

### JavaScript Architecture

#### [NEW] [js/data/songs.js](file:///c:/Users/fhirt/Desktop/leanyfi/js/data/songs.js)
Song database with structure:
```javascript
{
  id: string,
  title: string,
  album: string,
  year: number,
  difficulty: 'normal' | 'hardcore',
  audioPath: string,
  isReleased: boolean,
  source: 'spotify' | 'youtube' | 'soundcloud'
}
```

#### [NEW] [js/data/albums.js](file:///c:/Users/fhirt/Desktop/leanyfi/js/data/albums.js)
Album information for album recognition mode

#### [NEW] [js/data/badges.js](file:///c:/Users/fhirt/Desktop/leanyfi/js/data/badges.js)
Achievement/badge definitions with unlock conditions

#### [NEW] [js/core/GameEngine.js](file:///c:/Users/fhirt/Desktop/leanyfi/js/core/GameEngine.js)
Main game logic:
- Game state management
- Question generation
- Answer validation
- Score calculation
- Streak tracking

#### [NEW] [js/core/AudioPlayer.js](file:///c:/Users/fhirt/Desktop/leanyfi/js/core/AudioPlayer.js)
Audio playback controller:
- Load and play 5-second clips
- Volume control
- Preloading
- Error handling

#### [NEW] [js/core/StatsManager.js](file:///c:/Users/fhirt/Desktop/leanyfi/js/core/StatsManager.js)
Statistics tracking:
- LocalStorage persistence
- XP/level calculation
- Badge unlocking
- Accuracy tracking

#### [NEW] [js/ui/UIManager.js](file:///c:/Users/fhirt/Desktop/leanyfi/js/ui/UIManager.js)
UI state and rendering:
- Screen transitions
- Component rendering
- Modal management
- Animations

#### [NEW] [js/modes/SongRecognition.js](file:///c:/Users/fhirt/Desktop/leanyfi/js/modes/SongRecognition.js)
Song recognition game mode logic

#### [NEW] [js/modes/AlbumRecognition.js](file:///c:/Users/fhirt/Desktop/leanyfi/js/modes/AlbumRecognition.js)
Album recognition game mode logic

#### [NEW] [js/modes/LyricQuiz.js](file:///c:/Users/fhirt/Desktop/leanyfi/js/modes/LyricQuiz.js)
Lyric-based quiz mode

#### [NEW] [js/app.js](file:///c:/Users/fhirt/Desktop/leanyfi/js/app.js)
Application initialization and orchestration

---

### Assets Structure

#### [NEW] [assets/audio/normal/](file:///c:/Users/fhirt/Desktop/leanyfi/assets/audio/normal/)
Directory for official Spotify tracks (5-second clips)

#### [NEW] [assets/audio/hardcore/](file:///c:/Users/fhirt/Desktop/leanyfi/assets/audio/hardcore/)
Directory for unreleased/rare tracks

#### [NEW] [assets/images/albums/](file:///c:/Users/fhirt/Desktop/leanyfi/assets/images/albums/)
Album cover artwork

#### [NEW] [assets/images/badges/](file:///c:/Users/fhirt/Desktop/leanyfi/assets/images/badges/)
Badge/achievement icons

#### [NEW] [assets/fonts/](file:///c:/Users/fhirt/Desktop/leanyfi/assets/fonts/)
Custom vaporwave/retro fonts (if needed)

---

### Game Modes

#### 1. Song Recognition (Primary Mode)
**Normal Difficulty**:
- Pool: All official Yung Lean tracks on Spotify
- 5-second audio clip plays
- 4 multiple choice answers
- 10 seconds to answer
- +100 XP per correct answer

**Hardcore Difficulty**:
- Pool: Official + unreleased/rare tracks
- Same mechanics as Normal
- +200 XP per correct answer
- Unlocks special badges

#### 2. Album Recognition
- Show album cover or play track snippet
- User identifies which album
- Multiple choice from Yung Lean discography
- +150 XP per correct answer

#### 3. Lyric Quiz
- Display lyrics from a song
- User identifies the track
- Option to fill in missing lyrics
- +125 XP per correct answer

#### 4. Era Recognition (Future)
- Identify which era/period a track is from
- Based on sound, aesthetic, or year
- +175 XP per correct answer

---

### Design System

#### Color Palette
```css
--primary-bg: #0a0a0f; /* Deep dark blue-black */
--secondary-bg: #1a1a2e; /* Dark purple-blue */
--accent-pink: #ff6b9d; /* Sad Boys pink */
--accent-blue: #4ecdc4; /* Vaporwave cyan */
--accent-purple: #a78bfa; /* Soft purple */
--neon-pink: #ff10f0; /* Neon highlight */
--neon-blue: #00f0ff; /* Neon blue */
--text-primary: #ffffff;
--text-secondary: #b8b8d1;
--glass-bg: rgba(255, 255, 255, 0.05);
--glass-border: rgba(255, 255, 255, 0.1);
```

#### Typography
- **Headings**: "Orbitron" or "Audiowide" (vaporwave/retro feel)
- **Body**: "Inter" or "Roboto" (clean, readable)
- **Special**: "VT323" or "Press Start 2P" (retro gaming feel)

#### Visual Effects
- Glassmorphism on cards and modals
- Subtle glitch effects on hover
- VHS scan lines (optional overlay)
- Gradient backgrounds with slow animation
- Particle effects on achievements
- Smooth fade transitions between screens

---

### Gamification System

#### XP & Leveling
- Level 1-50 progression
- Each level requires more XP
- Level names based on Yung Lean songs/albums
- Unlock new features at milestones

#### Badges/Achievements
- 🌟 **"Sad Boy"** - Complete first quiz
- 💎 **"Ginseng Master"** - 10 correct answers in a row
- 🎭 **"Unknown Legend"** - Play all albums
- ⭐ **"Stardust Collector"** - Unlock all badges
- 💔 **"Emotional Damage"** - 100 total correct answers
- 🌸 **"Kyoto Speedrun"** - Complete quiz in under 30 seconds
- 🔥 **"Hardcore Drainer"** - 50 correct on Hardcore mode

#### Stats Tracked
- Total games played
- Total correct answers
- Accuracy percentage
- Current streak
- Best streak
- Favorite mode
- Total XP
- Current level
- Badges earned
- Time played

---

### User Flow

#### 1. Landing Page
- Hero section with Leanyfi logo
- Animated background (vaporwave gradient)
- "Start Playing" CTA button
- Quick stats preview (if returning user)
- Mode selection buttons

#### 2. Mode Selection
- Grid of game mode cards
- Each card shows:
  - Mode name
  - Description
  - Difficulty selector (for Song Recognition)
  - Best score
- Glassmorphism card design

#### 3. Game Screen
- Audio player/waveform visualization
- Question display
- 4 answer buttons (multiple choice)
- Timer countdown (10 seconds)
- Current score/streak display
- Progress indicator (question X of 10)

#### 4. Results Screen
- Final score
- Accuracy percentage
- XP earned
- New badges unlocked (if any)
- Level up notification (if applicable)
- "Play Again" / "Change Mode" buttons
- Share results button

#### 5. Profile/Stats Page
- User level and XP progress bar
- Badge collection grid
- Detailed statistics
- Recent achievements
- Leaderboard position (future)

---

### Responsive Design

**Mobile First Approach**:
- Touch-friendly buttons (min 44px)
- Single column layout on mobile
- Optimized audio controls
- Swipe gestures (future enhancement)

**Breakpoints**:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

---

## Verification Plan

### Automated Tests
- Manual testing of all game modes
- Audio playback verification across browsers
- LocalStorage persistence testing
- Responsive design testing (Chrome DevTools)

### Manual Verification
1. **Gameplay Testing**:
   - Play through each mode
   - Verify correct answer detection
   - Test timer functionality
   - Verify XP/badge unlocking

2. **Audio Testing**:
   - Test audio playback on different browsers
   - Verify 5-second clip timing
   - Test volume controls
   - Check audio loading states

3. **Visual Testing**:
   - Verify Sad Boys/vaporwave aesthetic
   - Test animations and transitions
   - Check glassmorphism effects
   - Verify responsive design on mobile

4. **Data Persistence**:
   - Verify stats save correctly
   - Test badge persistence
   - Check level progression saves

### Browser Compatibility
- Chrome (primary)
- Firefox
- Safari
- Edge

---

## Next Steps

1. **User approval** of this implementation plan
2. **Audio file preparation** - you'll need to provide or source the audio clips
3. **Begin development** with design system and core structure
4. **Iterative development** of game modes
5. **Testing and polish**
