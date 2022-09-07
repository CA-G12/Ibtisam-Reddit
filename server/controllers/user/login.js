const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const customizedServerError = require('../../middleware/customizedServerError');
const { logInQuery, getAllUserInfo } = require('../../database/queries/user/index');
const { loginSchema } = require('../validation/index');

const login = (req, res, next) => {
    loginSchema.validateAsync(req.body)
    .then(()=>{
        logInQuery(req.body.email)
        .then(({rows}) => {
            if(rows.length === 0){
                throw new customizedServerError(404,'This email is not Found.');
            } else {
                bcrypt.compare(req.body.password, rows[0].password)
                .then((data)=> {
                    if(!data){
                        throw new customizedServerError(400,'Wrong Password, Try again.')
                    } else {
                        getAllUserInfo(req.body.email)
                        .then(({rows}) => {
                                // {rows} => generateToken(res, {username: rows[0].username, id: rows[0].id})
                                const payload = { username: rows[0].username, id: rows[0].id}
                                const token = jwt.sign(payload, process.env.SECRET_KEY, { algorithm: 'HS256'});
                                res.status(201).cookie('token', token).redirect('/homePage');
                            })
                    }
                })
                .catch((err) => {
                    if (err.details) {
                        next(new CustomizedServerErrors(401, 'Something Went Wrong! Try Later'));
                    }
                    next(err);
                });
            }
        })
        .catch((err) => {
            if (err.details) {
                next(new CustomizedServerErrors(401, 'Something Went Wrong! Try Later'));
            }
            next(err);
        });
    })
    .catch((err) => {
        if (err.details) {
            next(new CustomizedServerErrors(401, `Validation error : ${err.details[0].message}`));
        }
        next(err);
    });
};

module.exports = login;
