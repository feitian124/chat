import Ember from 'ember';

var Router = Ember.Router.extend({
  location: ChatENV.locationType
});

Router.map(function() {
  this.route('chat');
});

export default Router;
