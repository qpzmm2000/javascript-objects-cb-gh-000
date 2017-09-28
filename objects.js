var playlist = {artist: "asa"}
delete platlist.artist
function updatePlaylist(playlist, artistName, songTitle) {
  var aaa = '' + artistName
  playlist[aaa] = songTitle
  console.log(playlist);
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;

 playlist
}
