const express = require('express');
const requestLogger = require('../shared/lib/requestLogger');
const ruid = require('express-ruid');
const app = express();

app.set('x-powered-by', false);

app.use(ruid())
app.use(express.json());
app.use(requestLogger);
app.use(require('./router'));

module.exports = app;
