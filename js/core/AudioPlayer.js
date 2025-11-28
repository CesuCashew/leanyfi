// ===================================
// LEANYFI - Audio Player
// Handles audio playback for both Spotify and local files
// ===================================

class AudioPlayer {
    constructor() {
        this.audioElement = document.getElementById('audio-player');
        this.currentSong = null;
        this.isPlaying = false;
        this.playDuration = 10; // 10 seconds for quiz
    }

    /**
     * Load and play a song
     * @param {Object} song - Song object from database
     * @param {number} startTime - Optional start time in seconds
     */
    async playSong(song, startTime = null) {
        try {
            this.currentSong = song;

            console.log('🎵 Playing:', song.title, 'from', song.album);

            // Determine audio source - prioritize local files
            let audioUrl;
            if (song.localAudioPath) {
                // Use local file (works for both normal and hardcore)
                audioUrl = song.localAudioPath;
                console.log('📁 Using local file');
            } else if (song.spotifyPreviewUrl) {
                // Fallback to Spotify preview
                audioUrl = song.spotifyPreviewUrl;
                console.log('🎵 Using Spotify preview');
            } else {
                console.error('❌ No audio source for:', song.title);
                throw new Error('No audio source available for this song');
            }

            console.log('🔗 Audio URL:', audioUrl);

            // Reset audio element completely to prevent caching issues
            this.audioElement.pause();
            this.audioElement.currentTime = 0;
            this.audioElement.src = ''; // Clear src to force browser to reset cache

            // Now set the new source
            this.audioElement.src = audioUrl;

            // Wait for audio to be ready with timeout
            await new Promise((resolve, reject) => {
                const timeout = setTimeout(() => {
                    this.audioElement.removeEventListener('canplaythrough', onReady);
                    this.audioElement.removeEventListener('error', onError);
                    reject(new Error('Audio failed to load within 5 seconds'));
                }, 5000); // 5 second timeout

                const onReady = () => {
                    clearTimeout(timeout);
                    this.audioElement.removeEventListener('canplaythrough', onReady);
                    this.audioElement.removeEventListener('error', onError);

                    // Determine start time AFTER metadata is available
                    if (startTime === null) {
                        if (song.chorusStart !== undefined) {
                            startTime = song.chorusStart;
                            console.log('🎤 Chorus start:', startTime);
                        } else {
                            const maxDuration = this.audioElement.duration || 30;
                            const maxStart = Math.max(0, maxDuration - this.playDuration);
                            startTime = Math.random() * maxStart;
                        }
                    }

                    // Set currentTime while audio is paused
                    this.audioElement.currentTime = startTime;
                    console.log('⏱️ Set time to:', startTime);
                    resolve();
                };

                const onError = (e) => {
                    clearTimeout(timeout);
                    console.error('❌ Error loading:', e);
                    this.audioElement.removeEventListener('canplaythrough', onReady);
                    this.audioElement.removeEventListener('error', onError);
                    reject(e);
                };

                // Use 'canplaythrough' instead of 'loadedmetadata'
                // This ensures the audio has enough data to play through
                this.audioElement.addEventListener('canplaythrough', onReady, { once: true });
                this.audioElement.addEventListener('error', onError, { once: true });
            });

            // Play audio
            try {
                // Check audio element state
                console.log('🔊 Audio element state:');
                console.log('   Volume:', this.audioElement.volume);
                console.log('   Muted:', this.audioElement.muted);
                console.log('   Ready state:', this.audioElement.readyState);
                console.log('   Duration:', this.audioElement.duration);
                console.log('   Current time before play:', this.audioElement.currentTime);
                console.log('   Will play for:', this.playDuration, 'seconds');

                const playStartTime = Date.now();
                await this.audioElement.play();
                this.isPlaying = true;
                console.log('▶️ Playing audio - YOU SHOULD HEAR SOUND NOW!');
                console.log('⏰ Audio will stop after', this.playDuration, 'seconds');

                // Stop after playDuration seconds
                setTimeout(() => {
                    const actualPlayTime = (Date.now() - playStartTime) / 1000;
                    console.log('⏹️ Stopping audio after', actualPlayTime.toFixed(2), 'seconds');
                    this.stop();
                }, this.playDuration * 1000);

                return true;
            } catch (playError) {
                console.error('❌ Play error:', playError);
                throw playError;
            }
        } catch (error) {
            console.error('❌ Error playing audio:', error);
            console.error('   Song:', song.title);
            console.error('   Error details:', error.message);
            return false;
        }
    }

    /**
     * Stop audio playback
     */
    stop() {
        this.audioElement.pause();
        this.audioElement.currentTime = 0;
        this.isPlaying = false;
    }

    /**
     * Pause audio
     */
    pause() {
        this.audioElement.pause();
        this.isPlaying = false;
    }

    /**
     * Resume audio
     */
    resume() {
        if (!this.isPlaying) {
            this.audioElement.play();
            this.isPlaying = true;
        }
    }

    /**
     * Set volume (0-1)
     */
    setVolume(volume) {
        this.audioElement.volume = Math.max(0, Math.min(1, volume));
    }

    /**
     * Get current playback time
     */
    getCurrentTime() {
        return this.audioElement.currentTime;
    }

    /**
     * Check if audio is currently playing
     */
    getIsPlaying() {
        return this.isPlaying;
    }

    /**
     * Preload audio for faster playback
     */
    async preload(song) {
        try {
            let audioUrl;
            if (song.localAudioPath) {
                audioUrl = song.localAudioPath;
            } else if (song.spotifyPreviewUrl) {
                audioUrl = song.spotifyPreviewUrl;
            }

            if (audioUrl) {
                const audio = new Audio(audioUrl);
                audio.preload = 'auto';
                audio.load();
            }
        } catch (error) {
            console.error('Error preloading audio:', error);
        }
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AudioPlayer;
}
