require('dotenv').config()
const { mongoose: { connect, disconnect } } = require('data')
const express = require('express')
const {
    registerUser,
    authenticateUser,
    retrieveUser,
    updateUser,
    updateUserPassword,
    // deleteUser,
    addQuestion,
    retrieveQuestion,
    addAnswer,
    addComment,
    listQuestions,
    listAnswers
} = require('./handlers')

const cors = require('cors')

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
        api.patch('/users/favs', jsonBodyParser) // toggleFavorites
        // api.delete('/users', jsonBodyParser, deleteUser)

        api.post('/questions', jsonBodyParser, addQuestion)
        api.get('/questions', listQuestions)
        api.get('/questions/:questionId', jsonBodyParser, retrieveQuestion)

        api.post('/answers/:questionId', jsonBodyParser, addAnswer) 
        api.get('/answers/:questionId', listAnswers) // listAnswers
        api.get('/answers/:answerId') // retrieveAnswer
        
        api.get('/comments/:answerId') // listComments
        api.post('/comments/:answerId', jsonBodyParser, addComment)
        api.patch('/comments/:commentId', jsonBodyParser) // updateComment
        api.delete('/comments/:commentId', jsonBodyParser) // deleteComment


        server.use('/api', api)

        server.listen(PORT, () => console.log('server started'))
    })