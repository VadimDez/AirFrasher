// modules =============================
var express = require('express');
var app     = express();
//var http    = require('http').Server(app); // for socket.io
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');
//var io = require('socket.io')(http);

// configuration ====================================

// config files
var db = require('./config/db');

// set up port
var port = process.env.PORT || 9876;

// connect to our mongoDB database
mongoose.connect(db.url);

// get all data/stuff of the body (POST) parameters
// parse application/json
app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public'));

// routes ==================================================
require('./app/routes')(app); // configure our routes

// start app ===============================================

// socket.io
//io.on('connection', function(socket){
//    console.log('a user connected');
//    socket.on('disconnect', function(){
//        console.log('user disconnected');
//    });
//});


// startup our app at http://localhost:9999

app.listen(port);

// shoutout to the user
console.log('Magic happens on port ' + port);

//app.all('/', function(req, res, next) {
//    //res.header("Access-Control-Allow-Origin", "10.10.60.4:5000");
//    res.header("Access-Control-Allow-Headers", "X-Requested-With");
//    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
//    next();
//});

// expose app
exports = module.exports = app;



// for socket.io
//http.listen(port, function () {
//
//    // shoutout to the user
//    console.log('Magic happens on port ' + port);
//
//    // expose app
//    exports = module.exports = app;
//});