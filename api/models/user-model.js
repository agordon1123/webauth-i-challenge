const db = require('../../data/db-config');

module.exports = {
    addUser,
    getUsers
};

const addUser = (user) => {
    return db('users')
        .insert(user)
        .then(success => success)
        .catch(err => err);
};

const getUsers = () => {
    return db('users')
        .then(users => users)
        .catch(err => err);
};
