const express = require('express');
const app = express();
const cors = require('cors');
const logger = require('morgan');
const db = require('./db');
require('dotenv').config();
const mainController = require('./controllers/mainController');
const errorHandler = require('./helpers/errorHandler');

db.connect(); // Database connection
app.use(logger('dev'));
app.use(express.json()); // JSON parser
// Body Parser
app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(cors());

// Main controller for endpoint
app.use('/', mainController);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  errorHandler.notFound(res);
});

// production error handler
app.use(function(err, req, res, next) {
  errorHandler.badRequest(res, err);
});

module.exports = app;
