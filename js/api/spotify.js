// ===================================
// LEANYFI - Spotify API Integration
// ===================================

class SpotifyAPI {
    constructor(clientId, clientSecret) {
        this.clientId = clientId;
        this.clientSecret = clientSecret;
        this.accessToken = null;
        this.tokenExpiry = null;
    }

    /**
     * Get access token from Spotify
     */
    async getAccessToken() {
        // Return cached token if still valid
        if (this.accessToken && this.tokenExpiry > Date.now()) {
            return this.accessToken;
        }

        try {
            const response = await fetch('https://accounts.spotify.com/api/token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': 'Basic ' + btoa(this.clientId + ':' + this.clientSecret)
                },
                body: 'grant_type=client_credentials'
            });

            if (!response.ok) {
                throw new Error('Failed to get Spotify access token');
            }

            const data = await response.json();
            this.accessToken = data.access_token;
            this.tokenExpiry = Date.now() + (data.expires_in * 1000);

            return this.accessToken;
        } catch (error) {
            console.error('Spotify API Error:', error);
            throw error;
        }
    }

    /**
     * Get ALL Yung Lean tracks from Spotify
     */
    async getYungLeanTracks() {
        const token = await this.getAccessToken();
        const artistId = '5nPOO9iTcrs9k6yFffPxjh'; // Yung Lean's Spotify ID

        try {
            // Get all albums (increase limit to get everything)
            const albumsResponse = await fetch(
                `https://api.spotify.com/v1/artists/${artistId}/albums?include_groups=album,single&limit=50&market=US`,
                {
                    headers: { 'Authorization': 'Bearer ' + token }
                }
            );

            if (!albumsResponse.ok) {
                throw new Error('Failed to fetch albums');
            }

            const albumsData = await albumsResponse.json();
            console.log(`📀 Found ${albumsData.items.length} albums/singles`);

            // Get tracks from each album
            const allTracks = [];
            const seenTracks = new Set(); // Avoid duplicates

            for (const album of albumsData.items) {
                const tracksResponse = await fetch(
                    `https://api.spotify.com/v1/albums/${album.id}/tracks`,
                    {
                        headers: { 'Authorization': 'Bearer ' + token }
                    }
                );

                if (!tracksResponse.ok) {
                    console.warn(`⚠️ Failed to fetch tracks for album: ${album.name}`);
                    continue;
                }

                const tracksData = await tracksResponse.json();

                tracksData.items.forEach(track => {
                    // Avoid duplicates (same track on different albums)
                    const trackKey = track.name.toLowerCase().trim();

                    if (!seenTracks.has(trackKey)) {
                        seenTracks.add(trackKey);
                        allTracks.push({
                            id: track.id,
                            title: track.name,
                            album: album.name,
                            year: new Date(album.release_date).getFullYear(),
                            previewUrl: track.preview_url,
                            spotifyUrl: track.external_urls.spotify,
                            duration: track.duration_ms
                        });
                    }
                });
            }

            console.log(`🎵 Total unique tracks: ${allTracks.length}`);
            console.log(`✅ Tracks with preview: ${allTracks.filter(t => t.previewUrl).length}`);

            return allTracks;
        } catch (error) {
            console.error('❌ Error fetching Yung Lean tracks:', error);
            throw error;
        }
    }

    /**
     * Update songs database with ALL Spotify tracks
     * Replaces the normal database completely
     */
    async updateSongsDatabase() {
        try {
            console.log('📡 Fetching ALL Yung Lean tracks from Spotify...');
            const tracks = await this.getYungLeanTracks();

            // Clear existing normal database
            SONGS_DATABASE.normal = [];

            // Add ALL tracks from Spotify that have preview URLs
            let addedCount = 0;
            tracks.forEach(track => {
                if (track.previewUrl) {
                    SONGS_DATABASE.normal.push({
                        id: 'spotify_' + track.id,
                        title: track.title,
                        album: track.album,
                        year: track.year,
                        difficulty: 'normal',
                        spotifyPreviewUrl: track.previewUrl,
                        isReleased: true,
                        source: 'spotify'
                    });
                    addedCount++;
                }
            });

            // Log results
            const albums = new Set(SONGS_DATABASE.normal.map(t => t.album));
            console.log('');
            console.log('✅ Spotify Integration Complete!');
            console.log(`   📊 Total tracks loaded: ${SONGS_DATABASE.normal.length}`);
            console.log(`   💿 Albums found: ${albums.size}`);
            console.log(`   🎵 Sample tracks:`);
            SONGS_DATABASE.normal.slice(0, 5).forEach(t => {
                console.log(`      - ${t.title} (${t.album})`);
            });
            console.log('');

            return tracks;
        } catch (error) {
            console.error('❌ Failed to load Spotify data:', error);
            console.error('   Error details:', error.message);
            console.log('⚠️  App will work with fallback data');
            // Don't throw - allow app to work with fallback data
            return [];
        }
    }

    /**
     * Search for a specific track
     */
    async searchTrack(query) {
        const token = await this.getAccessToken();

        try {
            const response = await fetch(
                `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track&limit=10`,
                {
                    headers: { 'Authorization': 'Bearer ' + token }
                }
            );

            if (!response.ok) {
                throw new Error('Search failed');
            }

            const data = await response.json();
            return data.tracks.items;
        } catch (error) {
            console.error('Search error:', error);
            return [];
        }
    }
}

// Initialize Spotify API
// Credentials are set by user
const spotifyAPI = new SpotifyAPI(
    '7f9bff6da0924e08afefb88a8528930d',
    '4d375301b28945f2ae2e9621c4010741'
);

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SpotifyAPI;
}
