// the request is not blocked!

var http = require('http');
 
http.createServer(function (request, response) {
  response.write('Hello\n');
  setTimeout(function(){
    response.end('world\n');
  }, 5000);
}).listen(3001);
 
console.log('Server running at http://localhost:3001/');
