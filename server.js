const express = require('express');
const userRouter = require('./api/routers/user-router')

const server = express();

server.use(express.json());
server.use('/api/', userRouter);

module.exports = server;
