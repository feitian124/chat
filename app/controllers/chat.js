import Ember from 'ember';

export default Ember.Controller.extend({
  name: '',
  age: 16,
  messages: [], //{ username, message }
  message: '',
  connected: false,
  users: [],

  actions: {
    addUser: function() {
      var name = this.get('name');
      this.socket.emit('add user', name);
      this.set('connected', true);
      console.log('addUser:', name);
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
    },
    modalCancel: function() {
      this.set('name', '');
    },
    modalSubmit: function() {
      // nothing need done as name already binded
      this.send('addUser');
    }
  },

  sockets: {
    connect: function() {
      console.log('EmberSockets has connected...');
    },

    disconnect: function() {
      console.log('EmberSockets has disconnected...');
    },

    login: function() {
      // send the message which interrupted by the input name modal
      this.sendMessage();
    },

    newMessage: function(data) {
      //this.get('messages').pushObject(data.username + ':' +data.message);
      //this.get('messages').pushObject(data);
      console.log('newMessage:', data);
    }
  }
});
