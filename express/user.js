function User(name, avatar) {
  this.name = name;
  this.avatar = avatar;
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
