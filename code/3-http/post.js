// http post using the built-in http library

// talk about security vulnerability - js injection

var https = require('https');
var querystring = require('querystring');

var post_data = querystring.stringify({
  'assertion' : 'abc',
  'audience' : '0.0.0.0'
});

var options = {
  host: 'browserid.org',
  path: '/verify',
  method: 'POST',
  'headers' : {
    'content-type' : 'application/x-www-form-urlencoded',
    'Content-Length': post_data.length
  }
};

var req = https.request(options, function(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  var data = '';

  res.on('data', function (chunk) {
    data += chunk.toString();
  });

  res.on('end', function () {
    var foo = eval('(' + data + ')');
    console.log('response', data);
  });

  res.on('error', function (err) {
    console.log('error', err);
  });
});

req.on('error', function(e) {
  console.log('problem with request: ' + e.message);
});

req.write(post_data);
req.end();

