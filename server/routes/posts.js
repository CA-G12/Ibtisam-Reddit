const router = require('express').Router();
const cookieParser = require("cookie-parser");

const { getPosts, addPost } = require('../controllers/posts/index');

router.use(cookieParser());
router.get('/post', getPosts);
router.get('/homePost', getPosts);
router.post('/addPost', addPost);

module.exports = router;
