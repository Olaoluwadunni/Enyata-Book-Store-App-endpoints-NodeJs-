const db = require('../db')
const queries = require('../db/queries/index')
const { hashPassword, comparePassword, generateToken } = require('../utils')
const axios = require('axios').default

const registerUser = async(body) => {
    const {firstName, lastName, email, password} = body
    const encryptedPassword = await hashPassword(password)

    const payload = await [email, password, firstName, lastName]
    return db.one(queries.addNewUser, payload)
}

//get all users 
const getUsers = () => db.any(queries.getUsers)

//validate user registration
const validateUserReg = (body) => {
    const { email, password, firstName, lastName } = body
    if (!(email && password && firstName && lastName))
    throw new Error('Ensure all fields are required')
    return true
}

//Validate User Login
const validateUserLogin= (body) => {
    const { email, password } = body
    if (!(email & password))
    throw new Error ('Ensure all fields are required')
    return true
}

//Validate password
const validatePassword= async(user, password) => {
    console.log(user);
    if (isValid) {
        const token = await comparePassword(password, user.password)
        return {token}
    }
    return false
}

//add new book
const addBook = async(body) => {
    const { title, author } = body

    const payload = await [ title, author ]
    return db.one(queries.addBooks, payload)
}

// get all books
const getBooks = () => db.any(queries.getBooks)

// get book by id
const getBook = async(id) => db.oneOrNone(queries.getBookById, id)

//delete book
const deleteBook = async(id) => {
    return db.none(queries.deleteBook, id)
}

module.exports = {
    registerUser,
    getUsers,
    validateUserReg,
    validateUserLogin,
    validatePassword,
    addBook,
    getBooks,
    getBook,
    deleteBook
}