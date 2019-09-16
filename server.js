const express = require('express');
const cors = require('cors');
const userRouter = require('./api/routers/user-router');

const server = express();

server.use(express.json());
server.use(cors());
server.use('/api/', userRouter);

module.exports = server;
