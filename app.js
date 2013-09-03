'use strict';
var express = require('express')
  , routes = require('./lib/routes')
  , http = require('http')
  , path = require('path')
  , config = require('./config')()
  ;

var app = express();

app.configure(function () {
  app.set('port', config.port);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express['static'](path.join(__dirname, 'public')));
});

app.configure('development', function () {
});

// Routes
app.get('/', routes.index);

http.createServer(app).listen(config.port, function () {
  console.log('Express server listening on port ' + config.port);
});