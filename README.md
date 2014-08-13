
# Web Chat - 聊聊

A great chat service using `Ember + Socket.io + Express` no matter what Operate
System you are using and , support most morden broswers, ideally for build your internal chat service.

## How to use

```
$ get clone https://github.com/feitian124/chat.git
$ cd chat
$ npm install
$ bowser install
# start front end
$ ember server
# open another terminal, start backend end
$ node express/index.js
```

Then point your browser to `http://localhost:4200`. Optionally specify
a port by supplying the `PORT` env variable.

## Features

- Multiple users can join a chat room by entering a unique username on website load.
- Users can type chat messages to the chat room
- A notification is sent to all users when a user joins or leaves the chatroom

### TODO
- public , private chat room
- room can keep in one day, week, month, year
