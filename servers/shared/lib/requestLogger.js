const morgan = require('morgan');
const logger = require('./logger');

const format = ':rid :method :url :status :response-time ms';

morgan.token('rid', request => request.rid);

const options = {
  stream: {
    write: message => logger.info(message.trim()),
  },
};

module.exports = morgan(format, options);