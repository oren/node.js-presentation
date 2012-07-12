var http = require('http');
var server = http.createServer(); //server is an even emitter

server.listen(3001);
console.log('Server running at http://localhost:3001/');

server.on('request', function (request, response) {
  response.end('Hello World\n');
});
 
// http.createServer return http.Server object which is an event emitter. one of it's events is 'request'

// the request object is created internally by HTTP server. it's a Readable Stream and en event emitter. it emits 'data', 'end' and others.
// it alsa has some functions. one of them is 'pipe' and allow us to push data into a Writable Stream.

// the respose object is Writable Stream. 
