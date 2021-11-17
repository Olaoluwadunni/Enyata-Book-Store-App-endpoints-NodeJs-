const express = require('express');
const app = express();
// const db = require('./src/db')
const router = require('./src/route/index')


const port = 4000


// Middlewares
app.use(express.json()) // converts request body to json format
app.use(express.urlencoded({
    extended: true
}))

// Default response on browser
app.get('/', (req, res) => {
    res.status(200).json({
        status: 'success',
        code: 200,
        message: 'Welcome to my Book Store API Project with NodeJs',
        data: []
    })
})

app.use(router)

// Error handling middleware
app.use((req, res) => {
    res.send('Not Found')
})

app.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({
        status: 'failed',
        message: 'internal server error',
        data: []
    })
})


app.listen(port, () => console.log(`starting on port ${port}`));

  module.exports = app