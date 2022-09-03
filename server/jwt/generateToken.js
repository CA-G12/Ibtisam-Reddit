const jwt = require('jsonwebtoken');
require('dotenv').config();
const express = require('express');

const generateToken = (res, payload) => {
    jwt.sign(payload, process.env.SECRET_KEY, {algorithm: 'HS256'}, (err, token) => {
        if(err){
            console.log(err);
        } else {
            res.cookie('token', token).send('send successfully');
        }
    })
};

module.exports = generateToken;
