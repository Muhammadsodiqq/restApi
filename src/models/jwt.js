const Joi = require("joi");

module.exports = Joi.object({
    name:Joi.string()
        .required()
        .max(32)
        .min(3),
    password:Joi.string()
        .max(32)
        .min(4)
        .required()
})