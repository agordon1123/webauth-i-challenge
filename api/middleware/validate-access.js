
module.exports = (req, res, next) => {
    console.log('3', req.session)
    if (req.session && req.session.user) {
        next();
    } else {
        res.status(401).json({ message: 'Protected route requires login' })
    };
};
