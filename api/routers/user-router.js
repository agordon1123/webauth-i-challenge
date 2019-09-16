const express = require('express');
const bcrypt = require('bcryptjs');

const Users = require('../models/user-model');

const validateUserBody = require('../middleware/validate-user-body');
const validatePassword = require('../middleware/validate-credentials');

const router = express.Router();

router.post('/register', validateUserBody, (req, res) => {
    let { username, password } = req.body;
    const hash = bcrypt.hashSync(password, 8);

    Users.addUser({ username, password: hash })
        .then(success => res.status(201).json(success))
        .catch(err => res.status(500).json(err));
});

router.post('/login', validatePassword, (req, res) => {    
    Users.login(req.body)
        .then(user => res.status(201).json(user))
        .catch(() => res.status(500).json({ error: 'Internal error' }));
});

router.get('/users', (req, res) => {
    Users.getUsers()
        .then(users => res.status(200).json(users))
        .catch(err => res.status(500).json(err));
});

module.exports = router;
