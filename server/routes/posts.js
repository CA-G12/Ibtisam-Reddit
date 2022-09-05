const postsRouter = require('express').Router();
const cookieParser = require("cookie-parser");

const { getPosts, addPost } = require('../controllers/posts/index');

postsRouter.use(cookieParser());

postsRouter.get('/post', getPosts);
postsRouter.get('/homePost', getPosts);
postsRouter.get('/addPost/:post', addPost);

module.exports = postsRouter;
