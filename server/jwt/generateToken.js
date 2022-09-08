const jwt = require('jsonwebtoken');
require('dotenv').config();

const generateToken = (res, payload) => {
    jwt.sign(payload, process.env.SECRET_KEY, {algorithm: 'HS256'}, (err, token) => {
        if(err){
            res.status(200).json({msg: 'Access denied'});
        } else {
            res.cookie('token', token).json({msg: 'send Successfully'});
        }
    })
};

module.exports = generateToken;
