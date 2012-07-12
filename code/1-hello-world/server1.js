var http = require('http');
 
http.createServer(function (request, response) {
  response.end('Hello World');
}).listen(3001);
 
console.log('Server running at http://localhost:3001/');


// http.createServer return http.Server object which is an event emitter. one of it's events is 'request'

// the request object is created internally by HTTP server. it's a Readable Stream and en event emitter. it emits 'data', 'end' and others.
// it alsa has some functions. one of them is 'pipe' and allow us to push data into a Writable Stream.

// the respose object is Writable Stream. 2 if it's functions are 'end' and 'write'
// write will write a string with a given encoding  to the stream. end terminates the stream with EOF of FIN.
