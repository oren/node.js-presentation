// CommonJS lets you organize your js code into 
// tiny modules that play nicely together

var getUser = require('./models/user.js');

// node.js convention - first argument of callback is error
getUser(1, function(err, user){
  if(err) {
    console.log('error', err);
  } else {
    console.log('hello ', user)
  }
});
