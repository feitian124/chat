import { test, moduleFor } from 'ember-qunit';

moduleFor('controller:index', 'IndexController', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

/* global io */
var socket = io();

// Replace this with your real tests.
test('it exists', function() {
  var controller = this.subject({
    socket: socket
  });
  ok(controller);
});
