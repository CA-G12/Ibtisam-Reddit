const { signUp, login } = require('../../controllers/user/index');

const router = require('express').Router();

router.post('/signup', signUp);
router.post('/log', login);

module.exports = router;
