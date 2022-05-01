const app = require('./app');
const http = require('http');
const logger = require('../shared/lib/logger');
const config = require('./config');

const server = http.Server(app);

server
  .listen(config.server.port)
  .on('listening', () => logger.info(`HTTP server listening on port ${config.server.port}`));
