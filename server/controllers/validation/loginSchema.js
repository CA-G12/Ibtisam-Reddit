const joi = require('joi');

const loginSchema = joi.object({
    email : joi.required(),
    password: joi.string().required(),
});

module.exports = loginSchema;
