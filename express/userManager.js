var _ = require('lodash'),
    User = require('./user.js');

function UserManager(name) {
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

module.exports = UserManager;

//var room = new Room(name, id, socket.id);
