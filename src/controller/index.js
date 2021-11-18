const {registerUser,getUsers, addBook, deleteBook, validatePassword, getBooks, getBook } = require('../services/index')

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
const getAllUsers = async (req, res, next) => {
    try {
        const allUsers = await getUsers()
        res.status(200).json({
            status: 200,
            message: "Users fetched successfully",
            data: allUsers
        })
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error.message

        })
    }
}
const loginUser = async(req, res, next) => {
    try {
        const { email, body: {password} } = req
        const validated = await validatePassword(email, password)
        if (!validated) {
            res.status(401).json({
            status: 'fail',
            message: error.message
        })
    } else {
        res.status(201).json({
        status: 'success',
        message: `User logged in successfully`,
        data: validated
        })
    }
 } catch (error) {
        return next(error)
    }
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
const getABook = async (req, res) => {
    try {
        const { params: { id } } = req
        const book = await getBook(id)
        if (book.length === 0) {
            throw new Error('No book found')
        }
        res.status(200).json({
            status:200,
            message: "This book exist and is fetched successfully",
            data: book
        })
    } catch (error) {
        res.status(404).json({
            status:'fail',
            message: error.message
        })
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
const deleteABook = async(req, res, next) => {
    try {
        const { body, params: {id}} = req
        const deleteBook = await deleteBook(body, id)
        
        res.status(200).json({
            status: "Success",
            message: `Catalogue books deleted successfully`,
            data: deleteBook
        })
    } catch (error) {
        return next(error)
    }
}

module.exports = { registerNewUser, getAllUsers, loginUser, addNewBook, forgotPassword, resetPassword, getAllBooks, getABook, deleteABook }