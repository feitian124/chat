import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
//import EmberSockets from 'ember-sockets/dist/ember-sockets';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: 'chat', // TODO: loaded via config
  Resolver: Resolver,
  Socket: window.EmberSockets.extend({
        host: 'localhost',
        port: 3000,
        controllers: ['index']
    })
});

loadInitializers(App, 'chat');

export default App;
