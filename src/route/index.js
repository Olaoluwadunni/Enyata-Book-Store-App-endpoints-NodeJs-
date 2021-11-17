const express = require('express')
const router = express.Router()
const { registerNewUser, addNewBook, loginUser, getAllBooks } = require('../controller/index')
const { validateUser, verifyToken,generateResetPasswordToken } = require('../middleware')
const { createUserSchema, loginUserSchema, forgotPasswordSchema, resetPasswordSchema } = require('../validations')

router.post(
    '/book-store/registerUser',
    validateUser( createUserSchema, "body"),
    registerNewUser
    )
router.post(
    '/book-store/login',
    validateUser(loginUserSchema, 'body'),
    loginUser,
)
router.post(
    '/book-store/addBook',
    addNewBook
)
router.get(
    '/book-store/get-all-books',
    getAllBooks
)
module.exports = router