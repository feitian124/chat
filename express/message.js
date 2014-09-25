function Message(userId, text) {
  this.sender = userId;
  this.text = text;
};

Message.prototype.isAvailable = function() {
  if (this.available === "available") {
    return true;
  } else {
    return false;
  }
};

module.exports = Message;

//var room = new Room(name, id, socket.id);
