var host = "http://datadash.wc1.yellowpages.com:3072/tube";
host = "www.google.com";
// http://searchdash.prod.wc1.yellowpages.com:3072/tube

var sys = require('util')
var exec = require('child_process').exec;
function puts(error, stdout, stderr) { sys.puts(stdout) }
exec("ping -c 3 " + host, puts);
