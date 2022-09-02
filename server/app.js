const express = require('express');
const compression = require('compression');
require('dotenv').config();

const app = express();

const port = process.env.PORT || 5000;

app.set('port', port);

app.use(express.json());
app.use(compression());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.json({ msg: 'Hello there' });
});

module.exports = app;
