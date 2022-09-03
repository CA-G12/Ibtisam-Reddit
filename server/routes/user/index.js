const { signUp } = require('../../controllers/user/index');

const router = require('express').Router();

router.post('/signup', signUp);

module.exports = router;
