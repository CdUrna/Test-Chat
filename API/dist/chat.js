"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
const socket_io_1 = require("socket.io");
const app = express_1.default();
const expressServer = http_1.createServer(app);
const io = new socket_io_1.Server().listen(expressServer);
const users = {};
const connections = [];
expressServer.listen(3000);
console.log('is Running');
io.sockets.on('connection', (socket) => {
    connections.push(socket);
    io.sockets.emit('on-connect', connections);
    socket.on('disconnect', (data) => {
        connections.slice(connections.indexOf(socket), 1);
    });
    socket.on('send-message', (data) => {
        io.sockets.emit('chat-message', { message: data.mess, name: users[socket.id] });
    });
    socket.on('new-user', (name) => {
        // Data is username
        const encodedUser = name.replace(/</g, "&lt;").replace(/>/g, "&gt;");
        users[socket.id] = encodedUser;
        // updateUsernames();
    });
});
//# sourceMappingURL=chat.js.map