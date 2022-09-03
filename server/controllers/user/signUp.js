const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const { signUpSchema } = require('../validation/index');
const { addUserQuery, getAllUserInfo} = require('../../database/queries/user/index');
// const generateToken = require('../../jwt/index');

const hashPassword = (password) => bcrypt.hash(password, 10);

const signUp = (req, res, next) => {
    getAllUserInfo(req.body.email)
    .then(({rows}) => {
        if(rows[0]){
            res.json({msg: 'This email is already in use'});
        } else {
            signUpSchema.validateAsync(req.body)
            .then(data => hashPassword(data.password))
            .then(hashedPassword => 
                console.log(data),
                addUserQuery({
                username: req.body.username,
                email: req.body.email,
                password: hashedPassword
            }))
            .then(
                // result => generateToken(res, {username: req.body.usename, id: result.rows[0].id})
                (result) => {
                    const payload = { username: req.body.usename, id: result.rows[0].id}
                    const token = jwt.sign(payload, process.env.SECRET_KEY, { algorithm: 'HS256'});
                    res.cookie('token', token).redirect('/');
                }
                )
            .catch(err => console.log(err));
        }
    }
    )
    .catch(err => console.log(err));
}

module.exports = signUp;
