const router = require('express').Router();
// const cookieParser = require("cookie-parser");
const { signUp, login, homePage} = require('../controllers/user/index');
// const { isAuthenticated } = require('../jwt/index');

// router.use(cookieParser());
//home Page is for everyone but adding post and comment for users
// router.get('/homePage', isAuthenticated, homePage);
router.get('/homePage', homePage);
router.post('/signup', signUp);
router.post('/log', login);

module.exports = router;
