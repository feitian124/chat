import Ember from 'ember';

export default Ember.ObjectController.extend({
  isEnabled: function() {
    var name = this.get('username');
    return (name && name.length >=3) ? true : false;
  }.property('username'),

  sokects: function() {
    var _this = this;
    this.socket.on('joined-server', function (user) {
      _this.session.user = user;
      _this.transitionToRoute('chat');
    });
  }.on('init'),

  actions: {
    goChat: function() {
      var _this = this;
      this.get('model').save().then(function(user) {
        _this.session.user = user;
        _this.transitionToRoute('chat');
      }, function(err) {
        console.log('err: ', err);
      });
    }
  }
});
