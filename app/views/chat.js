import Ember from 'ember';

var Enter = 13;

export default Ember.View.extend({
  keyDown: function(event) {
    if (event.which === Enter) {
      this.get('controller').send('sendMessage');
    }
  }
});
