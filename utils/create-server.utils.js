const http = require('http');
const logger = require('./logger.utils');

const createServer = (app) => {
    const server = http.createServer(app);
    const port = process.env.PORT || 8070;

    server.listen(port);

    server.on('listening', () => {
        const address = server.address();
        const bind = typeof address === 'string'
            ? 'pipe ' + address
            : 'port ' + address.port;
        logger.log('info', `CREATE SERVER -> Server listening on ${bind}`);
    })
}

module.exports = createServer;