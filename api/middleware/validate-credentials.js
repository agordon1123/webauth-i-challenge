const bcrypt = require('bcryptjs');
const db = require('../../data/db-config');

module.exports = (req, res, next) => {
    const { username, password } = req.body;

    if (username && password) {
        return db('users')
            .where({ username })
            .first()
            .then(user => {
                if (!user || !bcrypt.compareSync(password, user.password)) {
                    res.status(401).json({ error: 'Invalid credentials' });
                } else {
                    next();
                }
            })
            .catch(() => res.status(500).json('Internal error'));

    } else {
        res.status(400).json('No credentials provided');
    };
};
