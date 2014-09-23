var session = {
  name: null,
  user: null
};

export var initialize = function(container, app) {
  app.register('session:main', session, {instantiate: false, singleton: true});
  app.inject('route', 'session', 'session:main');
  app.inject('controller', 'session', 'session:main');
};

export default {
  name: 'session',

  initialize: initialize
};
