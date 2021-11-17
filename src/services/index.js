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


const addBook = async(body) => {
    const { title, author } = body

    const payload = await [ title, author ]
    return db.one(queries.addBooks, payload)
}


const getBooks = () => db.any(queries.getBooks)

const getBook = () => db.any(queries.get)
module.exports = {
    registerUser,
    validateUserReg,
    validateUserLogin,
    validatePassword,
    addBook,
    getBooks
}