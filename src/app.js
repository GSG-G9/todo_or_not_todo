require('env2')('./config.env');

const { join } = require('path');

const express = require('express');
const cookiePerser = require('cookie-parser');

const router = require('./router');
const { e404, errHandler } = require('./controllers/err');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(join(__dirname, '..', 'public')));
app.use(cookiePerser);
app.use(router);

app.use(e404);
app.use(errHandler);
// err handeler

module.exports = { app };
