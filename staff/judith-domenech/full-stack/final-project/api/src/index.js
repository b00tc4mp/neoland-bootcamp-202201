require('dotenv').config()
const { mongoose: { connect, disconnect } } = require('data')
const express = require('express')
const {
    registerUser,
    authenticateUser,
    retrieveUser,
    updateUser,
    updatePassword,
    deleteUser,
    createComment,
    listComments,
    retrieveComment,
    deleteComment,
    toggleFavorite,
    listFavorites,
    searchRackets,
    retrieveRacket,
    searchYourRacket  
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
        api.patch('/users/change-password', jsonBodyParser, updatePassword)
        api.get('/users/favs', listFavorites)
        api.patch('/users/favs', jsonBodyParser, toggleFavorite)
        api.delete('/users', jsonBodyParser, deleteUser)

        api.get('/rackets', searchRackets) 
        api.get('/rackets/:racketId', retrieveRacket)
        api.post('/rackets/', jsonBodyParser, searchYourRacket)

       api.post('/comments/:racketId', jsonBodyParser, createComment)
       api.get('/comments/:racketId', listComments)
       api.get('/comments/:commentId', retrieveComment)
       api.delete('/comments/:commentId', jsonBodyParser, deleteComment)
              

        server.use('/api', api)

        server.listen(PORT, () => console.log('server started'))
    })
