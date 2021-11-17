const {registerUser, addBook, validateUserLogin, getBooks } = require('../services/index')

const registerNewUser = async (req, res, next) => {
    try {
        const { body } = req
        console.log('hello')
        const newUser = await registerUser(body)
    
        res.status(200).json({
            status: 'success',
            message: `User created successfully`,
            data: newUser
        })
    } catch (error) {
        return next(error)
    }
}
const loginUser = async(req, res, next) => {
    try {
        const { email, password } = req
        const validated = await validateUserLogin(email, password)

        res.status(201).json({
            status: 'success',
            message: `User logged in successfully`,
            data: validated
        })
    } catch (error) {
        res.status(401).json({
            status: 'fail',
            message: error.message
        })
    }
    next()
}
const addNewBook = async (req, res, next) => {
    try {
        const {body} = req
        console.log('I want to add a new book')
        const newBook = await addBook(body)

        res.status(200).json({
            status: 'success',
            message: 'Book added successfully',
            data: newBook
        })
    } catch (error) {
        return next(error)
    }
}
const getAllBooks = async (req, res, next) => {
    try {
        const allBooks = await getBooks()
        res.status(200).json({
            status: 200,
            message: "Books fetched successfully",
            data: allBooks
        })
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error.message

        })
    }
}
const getABook = async (req, res, next) => {
    try {
        
    } catch (error) {
        
    }
}
const forgotPassword = async (req, res, next) => {
    try {
        const user = await updatePassword(req)
        res.status(200).json({
            status: 'success',
            message: 'Use this token to reset your password',
            data: user
        })
    } catch (error) {
       next(error) 
    }
}

const resetPassword = async (req, res, next) => {
    try{
        const {token} = req
        res.status(200).json({
            status: 'success',
            message: 'use this token to reset your password',
            data: token
        })
    } catch(error) {
        next(error)
    }
}

module.exports = { registerNewUser, loginUser, addNewBook, forgotPassword, resetPassword, getAllBooks  }