var http = require('http');
var url  = require('url');
var fs   = require('fs');
var environment = process.env.NODE_ENV || 'development';
var config = require('./config/' + environment + '.js');
var interval = config.interval * 1000 * 60; //we want minutes

function createImages(){ 
  console.log(new Date().toUTCString(), ' - start creating images');
  for (name in config.urls) {
    var options = url.parse(config.screenshotServiceUrl + config.urls[name]);
    createImage(name, options);
  };
}

// get request to our screenshot service and creating an image file
function createImage(name, options) {
  var req = http.get(options, function(res) {
    var filename = config.imagesPath + name + '.png';
    var tmpfilename = config.tmpImagesPath + name + '.png';
    var stream = fs.createWriteStream(tmpfilename);

    res.on('data', function (chunk) {
      stream.write(chunk);
    });

    res.on('end', function (chunk) {
      if(stream.fd === null) {
        console.log('not renaming');
      } else {
        console.log('renaming');
        fs.rename(tmpfilename, filename)
      }
      stream.end();
    });

    res.on('error', function(err) { 
      console.error('response error:', err); 
      stream.end();
    }); 
  }); // http.get

  req.on('error', function(err) { 
    console.error('request error. stack:', err.stack); 
  }); 

};

createImages();

// every 5 minutes
setInterval(function() {
  createImages();
}, interval);
