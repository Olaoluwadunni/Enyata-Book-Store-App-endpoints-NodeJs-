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
const addBookSchema = {
    schema: Joi.object().keys({
        title: Joi.string().required(),
        author: Joi.string().required(),
    }),
    message: 'Error while adding book by admin'
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
const updateBookSchema = {
    schema: Joi.object().keys({
        title: Joi.string(),
        author: Joi.string(),
    }),
    message: 'Error while updating book by admin'
}

const addBookToCatalogueSchema = {
    schema: Joi.object().keys({
        title: Joi.string().required(),
        author: Joi.string().required(),
    }),
    message: 'Error while updating book by admin'
}

module.exports = { 
    createUserSchema,
    loginUserSchema,
    addBookSchema,
    forgotPasswordSchema,
    resetPasswordSchema,
    updateBookSchema,
    addBookToCatalogueSchema
 }