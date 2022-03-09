const express = require('express');

const testRouter = require('./routes/api');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/test', testRouter);

module.exports = app;