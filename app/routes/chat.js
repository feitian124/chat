import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    if(!this.session.user) {
        this.transitionTo('index');
    }
  }
});
