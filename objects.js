var playlist = {artist: "asa"}
delete playlist.artist

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  console.log(playlist)
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;

 playlist
}
