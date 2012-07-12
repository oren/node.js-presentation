sys = require('util');
express = require('express');

app = express.createServer();

app.configure(function(){
  app.use(express.static(__dirname + '/public'));
});

app.get('/', function(req, res, next){
  res.render('/public/index.html');
});

app.listen(4000);
console.log('Server running at http://localhost:3001/');


//socket io stuff

var io  = require('socket.io').listen(app);
io.set('log level', 1);

io.sockets.on('connection', function(socket) {
  socket.on('data', function(data) {
    io.sockets.emit('message', data);
  });
});

