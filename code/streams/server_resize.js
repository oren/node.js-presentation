// resize with imagemagick and stream 
var http = require('http');
var fs = require('fs');
var spawn = require('child_process').spawn;
 
// request is a readable stream (event emitter with data, end and close events)
// response is a writable stream (event emitter with the close event)
http.createServer(function (request, response) {
  parts = request.url.split('/');
  console.log(parts);

  var path = __dirname + '/guinness/' + parts[1];
  var args = [path, '-resize', parts[2], '-'];
  var convert = spawn('convert', args);
  convert.stdout.pipe(response);
  convert.stderr.pipe(process.stderr);

}).listen(3000);
 
console.log('Server running at http://localhost:3000/');
