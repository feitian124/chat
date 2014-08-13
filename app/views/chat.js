import Ember from 'ember';

export default Ember.View.extend({
  keyDown: function(event) {
    var username = this.get('controller.name');
    var connected = this.get('controller.connected');
    // Auto-focus the current input when a key is typed
    if (!(event.ctrlKey || event.metaKey || event.altKey)) {
      if (username) {
        Ember.$('.msgInput').focus();
      } else {
        Ember.$('.nameInput').focus();
      }
    }
    if (event.which === 13) {
      if (connected && username) {
        this.get('controller').send('sendMessage');
      } else if (username) {
        this.get('controller').send('addUser');
      } else {
        this.popForName();
      }
    }
  },
  popForName: function() {
    Ember.$('#myModal').modal();
  }
});
