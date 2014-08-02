import Ember from 'ember';

export default Ember.View.extend({
  showChatPage: function() {
    Ember.$('.login.page').fadeOut();
    Ember.$('.chat.page').show();
    Ember.$('.inputMessage').focus();
  },

  keyDown: function(event) {
    var username = this.get('controller.name');
    var connected = this.get('controller.connected');
    // Auto-focus the current input when a key is typed
    if (!(event.ctrlKey || event.metaKey || event.altKey)) {
      if (username) {
        Ember.$('.inputMessage').focus();
      } else {
        Ember.$('.usernameInput').focus();
      }
    }
    
    if (event.which === 13) {
      console.log(username + ":" + connected);
      if (connected) {
        this.get('controller').send('sendMessage');
      } else if (username) {
        this.showChatPage();
        this.get('controller').send('addUser');
      } else {
        alert('please input username.');
        //this.setUsername();
      }
    }
  }
});
