import Ember from 'ember';

export default Ember.Controller.extend({
  name: null,

  isEnabled: function() {
    var name = this.get('name');
    return (name && name.length >=3) ? true : false;
  }.property('name'),

  sokects: function() {
    var controller = this;
    console.log('session name:', this.session.name);
    this.socket.on('joined-server', function (name) {
      console.log('name: ', name);
      controller.transitionToRoute('chat');
    });
  }.on('init'),

  actions: {
    goChat: function() {
      var name = this.get('name');
      this.socket.emit('join-server', name);
    }
  }
});