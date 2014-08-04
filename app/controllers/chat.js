import Ember from 'ember';

export default Ember.Controller.extend({
  name: '',
  age: 16,
  messages: [],
  message: '',
  connected: false,

  actions: {
    addUser: function() {
      var name = this.get('name');
      this.socket.emit('add user', name);
      this.set('connected', true);
    },
    sendMessage: function() {
      var message = this.get('message');
      if (message) {
        //js native push will not be observed
        this.get('messages').pushObject(message);
        this.set('message', '');
        // tell server to execute 'new message' and send along one parameter
        this.socket.emit('new message', message);
      }
    }
  },

  sockets: {
    connect: function() {
      console.log('EmberSockets has connected...');
    },

    disconnect: function() {
      console.log('EmberSockets has disconnected...');
    }
  }

});
