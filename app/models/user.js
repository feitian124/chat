import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr('string'),
  avatar: DS.attr('string'),
  status: DS.attr('boolean'),
  tasks: DS.hasMany('task', {async: true})
});
