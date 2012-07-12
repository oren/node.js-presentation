var http = require('http');
var server = http.createServer(); //server is an even emitter

server.listen(3001);
console.log('Server running at http://localhost:3001/');

server.on('request', function (request, response) {
  response.end('Hello World\n');
});
 
