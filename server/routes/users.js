const router = require('express').Router();
const cookieParser = require("cookie-parser");
const { signUp, login, homePage, logout, userProfile} = require('../controllers/user/index');
const { isAuthenticated } = require('../jwt/index');

router.use(cookieParser());
router.get('/homePage', isAuthenticated, homePage);
router.get('/userProfile', isAuthenticated, userProfile);
router.post('/signup', signUp);
router.post('/log', login);
router.get('/logOut', logout);

module.exports = router;
