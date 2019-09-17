const db = require('../../data/db-config');

module.exports = {
    addUser,
    getUsers,
    login
};

function addUser(user) {
    return db('users')
    .insert(user)
    .then(success => success)
    .catch(err => err);
};

function getUsers() {
    return db('users')
    .then(users => users)
    .catch(err => err);
};

function login(credentials) {
    const { username, password } = credentials;
    return db('users')
        .where({ username })
        .then(user => user)
        .catch(err => err);
};
