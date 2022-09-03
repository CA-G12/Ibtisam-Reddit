const joi = require('joi');

const signUpSchema = joi.object({
    email: joi.string().min(3).required(),
    username: joi.string().required(),
    password : joi.string().required(),
    confirmPassword: joi.string().required(),
});

module.exports = signUpSchema;
