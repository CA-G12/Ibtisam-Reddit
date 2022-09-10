const postsRouter = require('express').Router();
const cookieParser = require("cookie-parser");
const { isAuthenticated } = require('../jwt/index');

const { getPosts, addPost, deletePost, editPost, getComments, getUserPost } = require('../controllers/posts/index');

postsRouter.use(cookieParser());

postsRouter.get('/post', getPosts);
postsRouter.get('/homePost', getPosts);
postsRouter.get('/addPost/:post', addPost);
postsRouter.get('/delete/:id', deletePost);
postsRouter.post('/edit', editPost);
postsRouter.get('/comments', getComments);
postsRouter.get('/profile/user', isAuthenticated, getUserPost);
// postsRouter.get('userProfile', showProfile);

module.exports = postsRouter;
