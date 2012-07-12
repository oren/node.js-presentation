// core modules
var http = require('http');
var url  = require('url');
var fs   = require('fs');

// npm packages
var request = require('request');

// configs
var environment = process.env.NODE_ENV || 'development';
var config = require('./config/' + environment + '.js');
var interval = config.interval * 1000 * 60; //we want minutes

// take snapshot of each url in the config file
function createImages(){ 
  console.log(new Date().toUTCString(), ' - start creating images');
  for (index in config.urls) {
    createImage(config.screenshotServiceUrl, config.urls[index], index );
  };
}

function createImage(screenshotService, webpage, index) {
  request(screenshotService + webpage).pipe(fs.createWriteStream(config.imagesPath + index + '.png'))
};

createImages();

// default - every 5 minutes
setInterval(function() {
  createImages();
}, interval);
