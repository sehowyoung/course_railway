const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);


app.use( express.static("public"))

const { Server } = require("socket.io");
const io = new Server(server);


io.on('connection', (socket) => {
    // console.log('a user connected');
    // socket.on('disconnect', () => {
    //   console.log('user disconnected');
    // });
    socket.on('chat message', (msg) => {
        // console.log('message: ' + msg);
        io.emit('chat message', msg);
    });
});
  
server.listen(3000, () => {
  console.log('listening on *:3000');
});