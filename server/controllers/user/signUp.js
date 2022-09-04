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
            res.status(400).send({msg: 'This email is already in use, try o sign up with another email or log in instead.'});
        } else {
            signUpSchema.validateAsync(req.body)
            .then(data => hashPassword(data.password))
            // TODO: figure out why when we console.log the data, it does not complete the following lines.
            // .then(data => console.log(data))
            .then(hashedPassword => 
                addUserQuery({
                username: req.body.username,
                email: req.body.email,
                password: hashedPassword
            }))
            .then(
                // TODO:res is not defined in generate token function.
                // result => generateToken(res, {username: req.body.usename, id: result.rows[0].id})
                (result) => {
                    const payload = { username: req.body.usename, id: result.rows[0].id}
                    const token = jwt.sign(payload, process.env.SECRET_KEY, { algorithm: 'HS256'});
                    res.status(201).cookie('token', token).redirect('/homePage')
                }
                )
            .catch(err => console.log(err));
        }
    }
    )
    .catch(err => console.log(err));
}

module.exports = signUp;
