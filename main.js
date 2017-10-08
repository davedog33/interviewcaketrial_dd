var readFileContents = function(path){
  var client = new XMLHttpRequest();
  client.open('GET', path);
  client.send();

  return client;
}

window.fileReader = readFileContents;
