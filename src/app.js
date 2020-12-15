const express = require('express');
const { join } = require('path');
const cookiePerser = require('cookie-parser')
const rauter = require('./router');
const { e404, serverErr } = require('./controllers/err');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(join(__dirname, '..', 'public')));
app.use(cookiePerser);
// app.use(rauter);

app.use(e404);
app.use(serverErr);
// err handeler

module.exports = { app };
