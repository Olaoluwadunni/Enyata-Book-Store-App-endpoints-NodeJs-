const express = require('express')
const router = express.Router()
const { registerNewUser, addNewBook } = require('../controller/index')
const { validateUser, verifyToken,generateResetPasswordToken } = require('../middleware')
const { createUserSchema, loginUserSchema, forgotPasswordSchema, resetPasswordSchema } = require('../validations')

router.post(
    '/book-store/registerUser',
    validateUser( createUserSchema, "body"),
    registerNewUser
    )
router.post(
    '/book-store/login'
    ,
)
router.post(
    '/book-store/addBook',
    addNewBook
)
module.exports = router