// Setup basic express server
var express = require('express');
var app = express();
var server = require('http').createServer(app);
//var io = require('../..')(server);
var io = require('socket.io')(server);
var port = process.env.PORT || 3000;

server.listen(port, function () {
  console.log('Server listening at port %d', port);
});

// Routing
app.use(express.static(__dirname + '/../dist'));

var room  = require('./room');
room.on(io);
