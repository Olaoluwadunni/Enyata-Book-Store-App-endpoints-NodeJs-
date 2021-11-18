const express = require('express')
const router = express.Router()
const { registerNewUser, getAllUsers, addNewBook, deleteABook, loginUser, getAllBooks, getABook } = require('../controller/index')
const { validateUser, verifyToken,generateResetPasswordToken } = require('../middleware')
const { createUserSchema, loginUserSchema, addBookSchema, forgotPasswordSchema, resetPasswordSchema } = require('../validations')

router.post(
    '/book-store/registerUser',
    validateUser( createUserSchema, "body"),
    registerNewUser
    )
router.get(
    '/book-store/get-all-users',
    getAllUsers
    )
router.post(
    '/book-store/login',
    validateUser(loginUserSchema, 'body'),
    loginUser,
)
router.post(
    '/book-store/addBook',
    verifyToken('logged-in', 'user'),
    validateUser(addBookSchema, 'body'),
    addNewBook
)
router.get(
    '/book-store/get-all-books',
    getAllBooks
)
router.get(
    '/book-store/get-a-book/:id',
    verifyToken('logged-in', 'user'),
    getABook
)
router.delete(
    '/book-store/delete-book/:id',
    verifyToken('logged-in', 'user'),
    deleteABook
)
module.exports = router