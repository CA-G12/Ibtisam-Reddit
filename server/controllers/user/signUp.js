const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const customizedServerError = require('../../middleware/customizedServerError');
const { signUpSchema } = require('../validation/index');
const { addUserQuery, getAllUserInfo} = require('../../database/queries/user/index');
const { generateToken } = require('../../jwt/index');

const hashPassword = (password) => bcrypt.hash(password, 10);

const signUp = (req, res, next) => {
    getAllUserInfo(req.body.email)
    .then(({rows}) => {
        if(rows[0]){
            throw new customizedServerError(404,'This email is already in use, try too sign up with another email or login instead.')
        } else {
            signUpSchema.validateAsync(req.body)
            .then(data => hashPassword(data.password))
            .then(hashedPassword => 
                addUserQuery({
                username: req.body.username,
                email: req.body.email,
                password: hashedPassword
            }))
            .then(
                result => generateToken(res, {username: req.body.username, id: result.rows[0].id})
                )
                .catch((err) => {
                    if (err.details) {
                        next(new CustomizedServerErrors(401, 'Something Went Wrong! Try Later'));
                    }
                    next(err);
                });
        }
    }
    )
    .catch((err) => {
        if (err.details) {
            next(new CustomizedServerErrors(401, `Validation error : ${err.details[0].message}`));
        }
        next(err);
    });
}

module.exports = signUp;
