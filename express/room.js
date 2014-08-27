var moment = require('moment');

exports.on = function (io) {
  // usernames which are currently connected to the chat
  var usernames = {};
  var numUsers = 0;

  io.on('connection', function (socket) {
    var addedUser = false;

    // when the client emits 'new message', this listens and executes
    socket.on('newMessage', function (data) {
      // we tell the client to execute 'new message'
      io.emit('newMessage', {
        username: socket.username,
        avatar: socket.avatar,
        message: data,
        time: moment().format('MMM Do YYYY, h:mm:ss a')
      });
      console.log('newMessage:', data);
    });

    // when the client emits 'add user', this listens and executes
    socket.on('add user', function (username) {
      // we store the username in the socket session for this client
      socket.username = username;
      socket.avatar = 'images/avatars/' + numUsers%55 + '.jpg';
      // add the client's username to the global list
      usernames[username] = username;
      ++numUsers;
      addedUser = true;
      // echo globally (all clients) that a person has connected
      io.emit('user joined', {
        username: socket.username,
        avatar: socket.avatar,
        numUsers: numUsers
      });
      console.log("%s joind", username)
    });

    // when the user disconnects.. perform this
    socket.on('disconnect', function () {
      // remove the username from global usernames list
      if (addedUser) {
        delete usernames[socket.username];
        --numUsers;

        // echo globally that this client has left
        socket.broadcast.emit('user left', {
          username: socket.username,
          numUsers: numUsers
        });
      }
    });
  });
}
