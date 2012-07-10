// resize with imagemagick and stream 
var http = require('http');
var fs = require('fs');
var spawn = require('child_process').spawn;
 
// /1.jpg/400x400
http.createServer(function (request, response) {
  parts = request.url.split('/');
  console.log(parts);

  var path = __dirname + '/guinness/' + parts[1];
  var args = [path, '-resize', parts[2], '-'];
  var convert = spawn('convert', args); //convert is a ChildProcess object.
                                        // it's an event emitter that emit 3 events:
                                        // stdin, out and err
  convert.stdout.pipe(response);
  convert.stderr.pipe(process.stderr);

}).listen(3001);
 
console.log('Server running at http://localhost:3001/');
