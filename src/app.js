const express = require('express');
const { join } = require('path');
const rauter = require('./router');

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use(express.static(join(__dirname, '..', 'public')));
app.use(rauter);

// err handeler

module.exports = { app };
