class RecentlyPlayedSongs {
  constructor(capacity) {
    this.capacity = capacity;
    this.store = new Map(); // Map to store user-song pairs
  }

  // Add a song for a user
  addSong(user, song) {
    if (!this.store.has(user)) {
      this.store.set(user, []);
    }
    const songs = this.store.get(user);
    songs.push(song);
    // If capacity is exceeded, remove the least recently played song
    if (songs.length > this.capacity) {
      songs.shift();
    }
  }

  // Get recently played songs for a user
  getRecentlyPlayed(user) {
    return this.store.get(user) || [];
  }

  // Remove least recently played song for a user
  removeLeastRecentlyPlayed(user) {
    if (this.store.has(user)) {
      const songs = this.store.get(user);
      songs.pop(); // Remove the last (least recently played) song
    }
  }
}

module.exports = RecentlyPlayedSongs;
