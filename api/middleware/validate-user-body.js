module.exports = (req, res, next) => {
    let user = req.body;
    if (!user.username || !user.password) {
        res.status(401).json({ message: 'Invalid credentials' })
    } else {
        next();
    };
};
