var getUser = require('./models/user.js');

getUser(1, function(err, user){
  if(err) {
    console.log('error', err);
  } else {
    console.log('hello ', user)
  }
});
