var environment = process.env.NODE_ENV || 'development';
var config = require('./config/' + environment + '.js');
var interval = config.interval * 1000 * 60; //we want minutes
var scp = require('scp');

var options = {
  file: config.localPath + '*.png',
  user: config.user, 
  host: config.host,
  path: config.remotePath
}

function uploadImages(){ 
  console.log(new Date().toUTCString(), ' - uploading images');
  scp.send(options, function (err) {
      if (err) { 
        console.log(err);
      } else {
        console.log('done.');
      }
  });
}

uploadImages();

// every 5 minutes
setInterval(function() {
  uploadImages();
}, interval);



