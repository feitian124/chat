var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io')(server),
    sockets  = require('./sockets'),
    port = process.env.PORT || 4201;

app.use(express.static(__dirname + '/../dist'));

server.listen(port, function () {
  console.log('Server listening at port %d', port);
});

sockets.on(io);
