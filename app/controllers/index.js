import Ember from 'ember';

export default Ember.Controller.extend({
  name: null,

  isEnabled: function() {
    var name = this.get('name');
    return (name && name.length >=3) ? true : false;
  }.property('name'),

  sokects: function() {
    var controller = this;
    var socket = this.socket;
    socket.on('user joined', function (user) {
      console.log('user: ', user);
      controller.transitionToRoute('chat');
    });
  }.on('init'),

  actions: {
    goChat: function() {
      var name = this.get('name');
      this.socket.emit('add user', name);
    }
  }
});
