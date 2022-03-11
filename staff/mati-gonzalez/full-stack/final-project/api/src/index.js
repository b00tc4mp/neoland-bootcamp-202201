require('dotenv').config()
const { mongoose: { connect, disconnect } } = require('data')
const express = require('express')
const {
    registerUser,
    authenticateUser,
    retrieveUser,
    updateUser,
    updateUserPassword,
    deleteUser,
    addQuestion,
    retrieveQuestion,
    addAnswer
} = require('./handlers')

const cors = require('cors')
const { listQuestions } = require('logic')

const { env: { PORT, MONGODB_URL }} = process

connect(MONGODB_URL)
    .then(() => console.log('db connected'))
    .then(() => {
        const server = express()
        server.use(cors())
        const jsonBodyParser = express.json()
        const api = express.Router()

        api.post('/users', jsonBodyParser, registerUser)
        api.post('/users/auth', jsonBodyParser, authenticateUser)
        api.get('/users', retrieveUser)
        api.patch('/users', jsonBodyParser, updateUser)
        api.patch('/users/change-password', jsonBodyParser, updateUserPassword)
        api.delete('/users', jsonBodyParser, deleteUser)
        api.post('/questions', jsonBodyParser, addQuestion)
        api.get('/questions', listQuestions)
        api.get('/questions/:questionId', retrieveQuestion)
        api.post('/questions/:questionId', jsonBodyParser, addAnswer)


        server.use('/api', api)

        server.listen(PORT, () => console.log('server started'))
    })