var filters='';
var socket = io.connect();

socket.on("connect", function() {
  console.log("connected");
});

socket.on("disconnect", function() {
  console.log("disconnected");
});

socket.on('message', function(data) {
  console.log(data);

  var oldText = $('#chat-box').text();
  var newText = '';
  console.log(oldText);

  if($.trim(oldText) !== '') {
    oldText += '\n';
  } else {
    oldText = $.trim(oldText);
  }

  newText += oldText + data;

  $('#chat-box').text(newText);
});

function say() {
  socket.emit( 'data', $('#data').attr('value') );
  $('#data').val('');
  socket.disconnect();
  socket.socket.reconnect();
}

