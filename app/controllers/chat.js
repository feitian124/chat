import Ember from 'ember';

export default Ember.Controller.extend({
  name: function() {
    return this.session.name;
  }.property(),
  age: 16,
  messages: [], //{ username, message, time }
  message: '',
  connected: false,
  users: [],

  sokects: function() {
    var controller = this;
    var socket = this.socket;
    socket.on('newMessage', function (data) {
      controller.get('messages').pushObject(data);
    });
    socket.on('user joined', function (user) {
      controller.get('users').pushObject(user);
    });
  }.on('init'),

  actions: {
    addUser: function() {
      var name = this.get('name');
      this.socket.emit('add user', name);
      this.set('connected', true);
    },
    sendMessage: function() {
      var message = this.get('message');
      if (message) {
        this.set('message', '');
        this.socket.emit('newMessage', message);
      }
    }
  }
});
