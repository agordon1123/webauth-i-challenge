const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const session = require('express-session');
const KnexSessionStore = require('connect-session-knex')(session);
const db = require('./data/db-config');
const userRouter = require('./api/routers/user-router');

const server = express();

const sessionConfig = {
    name: 'foobar',
    secret: 'cool as a cucumber',
    cookie: {
        maxAge: 1000 * 60 * 30,
        secure: false,
        httpOnly: true,
    },
    resave: false,
    saveUninitialized: true,
    store: new KnexSessionStore({
        knex: db,
        createtable: false,
        clearInterval: 1000 * 60 * 30,
    }),
};

const corsConfig = {
    origin: 'http://localhost:3000',
    credentials: true
};

server.use(express.json());
server.use(cors(corsConfig));
server.use(session(sessionConfig));
server.use(helmet());

server.use('/api/', userRouter);

module.exports = server;
