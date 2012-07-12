// stream an image from the disk or from a remote server (EC2, etc) 
// 1. show the buffer in the data event
// 2. use request package to get image from remote server

var http = require('http');
var fs = require('fs');
// var requestImage = require('request'); // uncomment to use the request package
 
// request is a readable stream (event emitter with data, end and close events)
// response is a writable stream (event emitter with the close event)
http.createServer(function (request, response) {
  var path = __dirname + '/guinness' + request.url
  var stream = fs.createReadStream(path); // stream is a readable stream

  stream.pipe(response);
  stream.on('error', console.error);
}).listen(3001);
 
console.log('Server running at http://localhost:3001/');






























// requestImage('http://mcgonnigle.files.wordpress.com/2007/07/coonbig.jpg').pipe(response);
// var stream = requestImage('http://mcgonnigle.files.wordpress.com/2007/07/coonbig.jpg');

// stream.on('data', function(chunk){
//   console.log('chunk arrived!', chunk);
//   response.write(chunk);
// });
