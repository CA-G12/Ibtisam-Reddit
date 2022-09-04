const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const { logInQuery, getAllUserInfo } = require('../../database/queries/user/index');
const { loginSchema } = require('../validation/index');

const login = (req, res, next) => {
    loginSchema.validateAsync(req.body)
    .then(()=>{
        logInQuery(req.body.email)
        .then(({rows}) => {
            if(rows.length === 0){
                res.status(404).json({message: 'This email is not found'})
            } else {
                bcrypt.compare(req.body.password, rows[0].password)
                .then((data)=> {
                    if(!data){
                        res.status(400).json({message: 'Invalid password'})
                    } else {
                        getAllUserInfo(req.body.email)
                        .then(({rows}) => {
                                // {rows} => generateToken(res, {username: rows[0].username, id: rows[0].id})
                                const payload = { username: rows[0].username, id: rows[0].id}
                                const token = jwt.sign(payload, process.env.SECRET_KEY, { algorithm: 'HS256'});
                                res.cookie('token', token).redirect('/');
                            })
                    }
                })
                .catch((err)=> console.log(err))
            }
        })
    })
    .catch(err => console.log(err))
};

module.exports = login;
