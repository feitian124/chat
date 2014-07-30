import Ember from 'ember';

export default Ember.Controller.extend({
  name: 'Adam',
  age: 16,

  actions: {
    cherryPickName: function() {
      console.log("cherryPickName socket:", this.socket);
      this.socket.emit('cherryPickName');
    }
  },

  sockets: {
    cherryPickedName: function(name, age) {
      this.set('name', name);
      this.set('age', age);
    },

    connect: function() {
      console.log('EmberSockets has connected...');
    },

    disconnect: function() {
      console.log('EmberSockets has disconnected...');
    }
  }

});
