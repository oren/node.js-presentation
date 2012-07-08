var express = require('express')
  , routes = require('./routes');
var environment = process.env.NODE_ENV || 'development';
var config = require('./config/' + environment + '.js');
config.interval = config.interval * 1000; //we want seconds

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.set('config', config);
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});


// Routes
require('./routes/site')(app);

//move to config
app.listen(config.port);
console.log("Dashboards server listening on port %d in %s mode", app.address().port, app.settings.env);
