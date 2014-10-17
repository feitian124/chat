import config from '../config/environment';

/* global io */
var socket = io(config.socketHost);

socket.on('connect', function () {
  console.log('socket has connected...');
});

socket.on('disconnect', function () {
  console.log('socket has disconnected...');
});

export var initialize = function(container, app) {
    container.register('socket:main', socket, {instantiate: false, singleton: true});
    app.inject('route', 'socket', 'socket:main');
    app.inject('controller', 'socket', 'socket:main');
};

export default {
  name: 'socket',

  initialize: initialize
};



