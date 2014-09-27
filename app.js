var express = require('express')
  , http = require('http')
  , request = require('request')
  , cons = require('consolidate')
  , mongoose = require('mongoose')
  , e_jwt = require('express-jwt')
  , jwt = require('jsonwebtoken')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 4000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'html');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.cookieParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.engine('html', cons.swig);
  app.use(express.static(path.join(__dirname, 'client/public')));
  app.use(express.urlencoded());
  app.use(express.json);
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', function(req, res){ res.sendfile('client/index.html') });

app.get('/[^\.]+$', function(req, res){
    res.set('Content-Type', 'text/html')
        .sendfile(__dirname + '/client/index.html');
});

var server = http.createServer(app).listen(process.env.PORT || app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

