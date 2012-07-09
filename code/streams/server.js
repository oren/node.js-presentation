// stream an image from the disk
var http = require('http');
var fs = require('fs');
 
// request is a readable stream (event emitter with data, end and close events)
// response is a writable stream (event emitter with the close event)
http.createServer(function (request, response) {
  var path = __dirname + '/guinness' + request.url
  console.log(path);

  var stream = fs.createReadStream(path); // return a readable stream
  stream.pipe(response);

  stream.on('error', console.error);
}).listen(3000);
 
console.log('Server running at http://localhost:3000/');
