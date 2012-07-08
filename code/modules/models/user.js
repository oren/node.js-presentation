module.exports.foo = getUser;
module.exports.test = function() {console.log('yeee')};

function getUser(id, cb){
  //get user from db
  // cb('error while reading user data');
  var user = {'name': 'eric'};
  cb(null, user)
};
