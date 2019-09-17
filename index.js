const server = require('./server');

const port = process.env.PORT || 7200;

server.listen(port, () => console.log(`*** server listening on port ${port} ***`));
