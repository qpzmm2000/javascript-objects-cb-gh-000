var playlist = {artist: "asa"}


function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle

  return playlist
}

function updatePlaylist(playlist, artistName) {
  delete playlist.artistName;

 playlist
}
