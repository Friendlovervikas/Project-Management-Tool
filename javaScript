const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

// Express middleware and route handling here

// Socket.IO for real-time communication
io.on('connection', (socket) => {
  console.log('A user connected');

  // Handle real-time messaging between users in the same project
  socket.on('send_message', (data) => {
    // Save the message to the database
    // Emit the message to other team members in the project
    io.emit('receive_message', data);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

// Start the server
const PORT = 3000;
http.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
