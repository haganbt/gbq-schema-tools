'use strict';
var express = require('express')
  , routes = require('./lib/routes')
  , http = require('http')
  , path = require('path')
  , config = require('./config')()
  ;

var app = express();

app.configure(function () {
  app.set('port', process.env.PORT || 3000);
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






/*
var config = require('./config')();

var bigquery = require('google-bigquery');
var fs = require('fs');
    
    var client = bigquery({
        "iss": '554267902492@developer.gserviceaccount.com',
        "key": fs.readFileSync('file.pem', 'utf8')
    });


 client.getProjects(function (err, projs) {
    var projId = projs.projects[0].id;
    client.datasets.getAll(projId, function (err, datasets) {
        //get the first.
        var first = datasets.datasets[0].datasetReference.datasetId;
        console.log(first);
        client.tables.getAll(first, projId, function (err, tables) {
					console.log('****' + JSON.stringify(tables));
        });
    });
});

*/



