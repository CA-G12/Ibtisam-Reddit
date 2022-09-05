const jwt = require("jsonwebtoken");
require('dotenv').config();

const isAuthenticated = (req, res, next) => {
    const recievedToken = req.cookies.token;
    if(!recievedToken){
        res.status(200).json({msg: 'Access denied'});
    } else {
        jwt.verify(recievedToken, process.env.SECRET_KEY, (err, decoded) => {
            if (err) {
            res.status(400).json({msg: 'Token invalid'});
            } else {
            res.cookie('username', decoded.username);
            res.cookie('userId:', decoded.id);
            next();
            }
        });
    }
}

module.exports = isAuthenticated;
