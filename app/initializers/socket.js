/* global io */
var socket = io('http://localhost:4201');

socket.on('connect', function () {
  console.log('socket has connected...');
});

socket.on('disconnect', function () {
  console.log('socket has disconnected...');
});

export default {
  name: 'socket',

  initialize: function(container, app) {
    // Register the `socket:main` namespace
    app.register('socket:main', socket, {instantiate: false, singleton: true});
    // Inject the namespace into controllers and routes
    app.inject('route', 'socket', 'socket:main');
    app.inject('controller', 'socket', 'socket:main');
  }
};
