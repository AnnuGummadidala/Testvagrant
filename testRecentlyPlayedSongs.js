const assert = require('assert');
const RecentlyPlayedSongs = require('./RecentlyPlayedSongs');

describe('RecentlyPlayedSongs', function () {
  let store;

  beforeEach(function () {
    store = new RecentlyPlayedSongs(3);
  });

  it('should add songs for a user', function () {
    store.addSong("user1", "S1");
    store.addSong("user1", "S2");
    store.addSong("user1", "S3");
    assert.deepStrictEqual(store.getRecentlyPlayed("user1"), ["S1", "S2", "S3"]);
  });

  it('should remove least recently played song when capacity is exceeded', function () {
    store.addSong("user1", "S1");
    store.addSong("user1", "S2");
    store.addSong("user1", "S3");
    store.addSong("user1", "S4");
    assert.deepStrictEqual(store.getRecentlyPlayed("user1"), ["S2", "S3", "S4"]);
  });

  it('should return empty array for non-existent user', function () {
    assert.deepStrictEqual(store.getRecentlyPlayed("nonexistentuser"), []);
  });

  it('should handle adding songs for multiple users', function () {
    store.addSong("user1", "S1");
    store.addSong("user2", "S2");
    store.addSong("user1", "S3");
    store.addSong("user2", "S4");
    assert.deepStrictEqual(store.getRecentlyPlayed("user1"), ["S1", "S3"]);
    assert.deepStrictEqual(store.getRecentlyPlayed("user2"), ["S2", "S4"]);
  });

  it('should handle removing least recently played song for multiple users', function () {
    store.addSong("user1", "S1");
    store.addSong("user1", "S2");
    store.addSong("user1", "S3");
    store.addSong("user1", "S4");
    store.addSong("user1", "S5");
    store.addSong("user1", "S6");
    store.addSong("user2", "S7");
    store.addSong("user2", "S8");
    store.addSong("user2", "S9");
    store.addSong("user2", "S10");
    store.addSong("user2", "S11");
    store.addSong("user2", "S12");
    assert.deepStrictEqual(store.getRecentlyPlayed("user1"), ["S4", "S5", "S6"]);
    assert.deepStrictEqual(store.getRecentlyPlayed("user2"), ["S10", "S11", "S12"]);
  });

  it('Should return empty list when store is empty', function () {
    store.removeLeastRecentlyPlayed("user1");
    assert.deepStrictEqual(store.getRecentlyPlayed("user1"), []);
  });

  it('should not add a song when user is null', function () {
    store.addSong(null, "S1");
    assert.deepStrictEqual(store.getRecentlyPlayed(null), []);
  });

  it('should not add a song when song is null', function () {
    store.addSong("user1", null);
    assert.deepStrictEqual(store.getRecentlyPlayed("user1"), []);
  });

  it('should not add a song when user and song are null', function () {
    store.addSong(null, null);
    assert.deepStrictEqual(store.getRecentlyPlayed(null), []);
  });

  it('should not add a song when user is undefined', function () {
    store.addSong(undefined, "S1");
    assert.deepStrictEqual(store.getRecentlyPlayed(undefined), []);
  });

  it('should not add a song when song is undefined', function () {
    store.addSong("user1", undefined);
    assert.deepStrictEqual(store.getRecentlyPlayed("user1"), []);
  });

  it('should not add a song when user and song are undefined', function () {
    store.addSong(undefined, undefined);
    assert.deepStrictEqual(store.getRecentlyPlayed(undefined), []);
  });
});


