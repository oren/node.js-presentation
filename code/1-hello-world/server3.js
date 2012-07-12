// the request is not blocked!
// our server can accept more requests
// demo the node debugger

var http = require('http');
var users = 0;
 
http.createServer(function (request, response) {
  users += 1;
  response.write('Hello\n');
  setTimeout(function(){
    debugger;
    response.end('world\n');
  }, 5000);
}).listen(3001);
 
console.log('Server running at http://localhost:3001/');
