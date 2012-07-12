// http get  using request 
// using twitter api

var request = require('request');
var fs = require('fs');

request('http://search.twitter.com/search.json?q=node.js', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var res = JSON.parse(body);
    res.results.forEach(function(twitt){
      console.log(twitt.text);
    });
  }
})


// stream image 
// request('http://mcgonnigle.files.wordpress.com/2007/07/coonbig.jpg').pipe(fs.createWriteStream('cat.png'))

