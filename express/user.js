function User(name) {
  this.name = name;
  this.avatar = 'images/avatars/1.jpg';
  this.room = null;
  this.status = "available";
};

User.prototype.isAvailable = function() {
  if (this.available === "available") {
    return true;
  } else {
    return false;
  }
};

module.exports = User;

//var room = new Room(name, id, socket.id);
