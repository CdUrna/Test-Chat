import { Server } from 'socket.io';

import expressServer from './express.server';
import { IMessage } from './models';

const users: { [id: string]: { name: string } } = {}
const connections = [];

const io = new Server(expressServer, {
  cors: {
    origin: "http://localhost:4200",
    methods: ["GET", "POST"]
  }
});

io.on('connect', (socket) => {
  connections.push(socket);

  socket.emit('get-users', users);


  socket.on('join', (name: string) => {
    users[socket.id] = { name };
    io.sockets.emit('get-users', users);
  });

  socket.on('disconnect', (data) => {
    delete users[socket.id];
    connections.slice(connections.indexOf(socket), 1);
  });

  socket.on('send-message', (data: IMessage) => {
    console.log(data);
    io.sockets.emit('chat-message', { message: data.message, name: users[socket.id].name, time: data.time });
  });
});