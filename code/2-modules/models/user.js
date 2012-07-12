// this file exposes the getUser function
// we can expose more functions by adding them to module.exports object

module.exports= getUser;

//get user from db
function getUser(id, cb){
  // cb('error while reading user data');

  var user = {'name': 'eric'};
  cb(null, user)
};
