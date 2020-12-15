const express = require('express');
const { join } = require('path');
const rauter = require('./router');
const { e404, serverErr } = require('./controllers/err');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(join(__dirname, '..', 'public')));
// app.use(rauter);

app.use(e404);
app.use(serverErr);
// err handeler

module.exports = { app };
