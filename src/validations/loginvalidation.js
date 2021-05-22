const Joi = require("joi");

module.exports = Joi.object({
    id:Joi.string()
        .required(),
    password:Joi.string()
        .max(32)
        .min(4)
        .required()
})