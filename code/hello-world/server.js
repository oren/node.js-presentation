var http = require('http');
 
http.createServer(function (request, response) {
  response.end('Hello World\n');
}).listen(3001);
 
console.log('Server running at http://localhost:3000/');
