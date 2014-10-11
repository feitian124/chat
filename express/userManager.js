var _ = require('lodash'),
    User = require('./user.js');

function UserManager() {
  this.users = [];
};

UserManager.prototype.push = function(user) {
  if(user.constructor.name !== 'User') {
    throw new Error('not a User!');
  } else {
    this.users.push(user);
  }
  return this;
};

UserManager.prototype.length = function() {
  return this.users.length;
};

UserManager.prototype.contains = function(user) {
  var result = _.where(this.users, function(u) {
    return user.name === u.name;
  });
  return result.length > 0;
};

var um = new UserManager();
module.exports = um;

//var room = new Room(name, id, socket.id);
