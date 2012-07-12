sys = require('util');
express = require('express');

app = express.createServer();
app.configure(function(){
  app.use(express.static(__dirname + '/public'));
});

app.get('/', function(req, res, next){
  res.render('/public/index.html');
});
app.listen(3001);
console.log('Server running at http://localhost:3001/');

var io  = require('socket.io').listen(app);
io.set('log level', 1);

myList = [];
Array.prototype.del = function(val) {
    for(var i=0; i<this.length; i++) {
        if(this[i] == val) {
            this.splice(i, 1);
            break;
        }
    }
}

io.sockets.on('connection', function(socket) {
  socket.on('data', function(action,data) {
      if(action==='+') {
        myList.push(data);
      }
      else {
        myList.del(data);
      }
    });

    socket.on('getfilter', function() {
      socket.emit('pushfilter', myList);
    });
});

