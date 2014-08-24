import Ember from 'ember';

export default Ember.Controller.extend({
  name: '',
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
    socket.on('user joined', function (data) {
      controller.get('users').pushObject(data.username);
    });
  }.on('init'),

  actions: {
    addUser: function() {
      var name = this.get('name');
      this.socket.emit('add user', name);
      this.get('users').pushObject(name);
      this.set('connected', true);
    },
    sendMessage: function() {
      var message = this.get('message');
      if (message) {
        this.set('message', '');
        this.socket.emit('newMessage', message);
      }
    },
    modalCancel: function() {
      this.set('name', '');
    },
    modalSubmit: function() {
      // nothing need done as name already binded
      this.send('addUser');
    }
  }
});
