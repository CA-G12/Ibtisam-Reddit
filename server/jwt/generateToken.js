const jwt = require('jsonwebtoken');
require('dotenv').config();

const generateToken = (res, payload) => {
    jwt.sign(payload, process.env.SECRET_KEY, {algorithm: 'HS256'}, (err, token) => {
        if(err){
            console.log(err);
        } else {
            res.cookie('token', token).json({msg: 'send Successfully'});
        }
    })
};

module.exports = generateToken;
