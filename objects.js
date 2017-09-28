var playlist = {artist: "asa"}


function updatePlaylist(playlist, artistName, songTitle) {
  delete playlist.artist;
  playlist[artistName] = songTitle

  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;

 playlist
}
