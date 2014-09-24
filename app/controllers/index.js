import Ember from 'ember';

export default Ember.Controller.extend({
  name: null,

  isEnabled: function() {
    var name = this.get('name');
    return (name && name.length >=3) ? true : false;
  }.property('name'),

  sokects: function() {
    var _this = this;
    this.socket.on('joined-server', function (user) {
      _this.session.user = user;
      _this.transitionToRoute('chat');
    });
  }.on('init'),

  actions: {
    goChat: function() {
      var name = this.get('name');
      this.socket.emit('join-server', name);
    }
  }
});
