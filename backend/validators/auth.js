const Joi = require('joi');

const registerSchema = Joi.object({
    username:Joi.string().required().min(3).max(20),
    password:Joi.string().required().min(6).max(20),
    mail:Joi.string().required().email()
})
const loginSchema = Joi.object({
    password:Joi.string().required().min(6).max(20),
    mail:Joi.string().required().email()
})


module.exports = {
    registerSchema,
    loginSchema
}