


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

var playlist = {aaa: "asa"}