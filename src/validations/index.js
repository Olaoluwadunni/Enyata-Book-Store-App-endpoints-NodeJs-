const Joi = require('joi')

const createUserSchema = {
    schema: Joi.object().keys({
        email: Joi.string().email().required(),
        password: Joi.string().required(),
        firstName: Joi.string().required(),
        lastName: Joi.string().required()
    }),
    message: 'Error creating user'
}

const loginUserSchema = {
    schema: Joi.object().keys({
        email: Joi.string().email().required(),
        password: Joi.string().required()
    })
}


const forgotPasswordSchema = {
    schema: Joi.object().keys({
        email: Joi.string().email().required(),
    }),
    message: 'Error retrieving password'
}

const resetPasswordSchema = {
    schema: Joi.object().keys({
        password: Joi.string().required()
    }),
    message: 'Unable to reset password'
}

module.exports = { createUserSchema, loginUserSchema, forgotPasswordSchema, resetPasswordSchema }