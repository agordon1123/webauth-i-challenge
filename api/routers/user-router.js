const express = require('express');
const bcrypt = require('bcryptjs');

const Users = require('../models/user-model');

const validateUserBody = require('../middleware/validate-user-body');
const validatePassword = require('../middleware/validate-password');
const validateAccess = require('../middleware/validate-access');

const router = express.Router();

router.post('/register', validateUserBody, (req, res) => {
    let { username, password } = req.body;
    const hash = bcrypt.hashSync(password, 8);

    Users.addUser({ username, password: hash })
        .then(success => res.status(201).json(success))
        .catch(err => res.status(500).json(err));
});

router.post('/login', validatePassword, (req, res) => {
    console.log('22', req.session);
    Users.login(req.body)
        .then(user => {
            console.log(user)
            req.session.user = user[0].username;
            console.log(req.session);
            res.status(201).json(user);
        })
        .catch(() => res.status(500).json({ error: 'Internal error' }));
});

router.get('/users', validateAccess, (req, res) => {
    console.log('34', req.session)
    Users.getUsers()
        .then(users => res.status(200).json(users))
        .catch(err => res.status(500).json(err));
});

router.get('/logout', (req, res) => {
    console.log('40', req.session)
    if (req.session) {
        req.session.destroy(err => {
            if (err) {
                res.status(500).json({ error: 'Error logging out' });
            } else {
                res.status(200).json({ message: 'Successfully logged out' });
            }
        })
    } else {
        res.status(200).json({ message: "You are already logged out" });
    };
});

module.exports = router;
