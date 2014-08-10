import Ember from 'ember';

export default Ember.Controller.extend({
  name: 'name',
  age: 16,
  messages: [], //{ username, message }
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
      var name = this.get('name');
      if (message) {
        var lineItem = { username: name, message: message };
        //js native push will not be observed
        this.get('messages').pushObject(lineItem);
        this.set('message', '');
        // tell server to execute 'new message' and send along one parameter
        this.socket.emit('newMessage', message);
      }
    }
  },

  sockets: {
    connect: function() {
      console.log('EmberSockets has connected...');
    },

    disconnect: function() {
      console.log('EmberSockets has disconnected...');
    },

    newMessage: function(data) {
      //this.get('messages').pushObject(data.username + ':' +data.message);
      this.get('messages').pushObject(data);
    }
  }
});
