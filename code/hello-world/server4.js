var http = require('http');

var j=5;

http.createServer(function (request, response) {
  var i = 1;
  debugger;
  response.end('Hello World\n');
}).listen(3001);
 
console.log('Server running at http://localhost:3001/');
