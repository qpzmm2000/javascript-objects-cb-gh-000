var playlist = {artist: "asa"}


function updatePlaylist(playlist, artistName, songTitle) {
  delete playlist.artist;
  playlist[artistName] = songTitle

  return playlist
}

function updatePlaylist(playlist, artistName) {
  delete playlist.artistName;

 playlist
}
