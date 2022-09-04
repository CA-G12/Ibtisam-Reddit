const express = require('express');
const compression = require('compression');
const path = require('path');
require('dotenv').config();

const userRouter = require('./routes/users');
const PostsRouter = require('./routes/posts');
const { notFound, serverError } = require('./middleware/index');

const app = express();

const port = process.env.PORT || 5000;
app.set('port', port);

app.use(express.json());
app.use(compression());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '..', 'client', 'public')));
app.use(userRouter);
app.use(PostsRouter);
app.use(notFound);
app.use(serverError);

module.exports = app;
