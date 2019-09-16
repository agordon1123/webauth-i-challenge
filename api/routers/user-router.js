const express = require('express');
const Users = require('../models/user-model');
const validateUserBody = require('../middleware/validate-user-body');

const router = express.Router();

router.post('/register', validateUserBody, (req, res) => {
    Users.addUser(req.body)
        .then(success => res.status(201).json(success))
        .catch(err => res.status(500).json(err));
});

router.post('/login', (req, res) => {

});

router.get('/users', (req, res) => {
    Users.getUsers()
        .then(users => res.status(200).json(users))
        .catch(err => res.status(500).json(err));
});

module.exports = router;
