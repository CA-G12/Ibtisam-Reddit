const router = require('express').Router();
const cookieParser = require("cookie-parser");

const { getPosts } = require('../controllers/posts/index');
// const isAuthenticated = require('../jwt/index');

router.use(cookieParser());

router.get('/post', getPosts);
router.get('homePost', getPosts);
// router.post('/post/addpost', isAuthenticated, addPost);

module.exports = router;
