import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('task', 'Task', {
  // Specify the other units that are required for this test.
  needs: ['model:user']
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(!!model);
});
