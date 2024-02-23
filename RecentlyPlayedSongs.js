class RecentlyPlayedSongs {
  constructor(capacity) {
    this.capacity = capacity;
    this.store = new Map(); // Map to store user-song pairs
  }

  // Add a song for a user
  addSong(user, song) {
    if (song === null || song === undefined) 
    {
      return; // Do not add the song if it is null or undefined
    }
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
    // Check if the user is null or undefined
    if (user === null || user === undefined) {
        return []; // Return an empty array for null or undefined user
    }
    // Return the recently played songs for the specified user
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
