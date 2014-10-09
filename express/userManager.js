var _ = require('lodash');

function UserManager(name) {
  this.users = [];
};

UserManager.prototype.push = function(user) {
  console.log('type:',typeof(user));
  if(typeof(user) !== 'User') {
    throw new Error('not a User!');
  } else {
    this.users.push(user);
  }
};

module.exports = UserManager;

//var room = new Room(name, id, socket.id);
