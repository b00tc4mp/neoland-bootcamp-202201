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
    createGraffiti,
    modifyGraffiti,
    deleteGraffiti,
    listGraffitis,
    retrieveGraffiti,
    searchGraffiti,
    toggleFavorite,
    listFavorites

} = require('./handlers')

const cors = require('cors')

const { env: { PORT, MONGODB_URL } } = process

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

        api.post('/graffitis', jsonBodyParser, createGraffiti)
        api.patch('/graffitis/:graffitiId', jsonBodyParser, modifyGraffiti)
        api.delete('/graffitis/:graffitiId', deleteGraffiti)
        api.get('/graffitis/all', listGraffitis)
        api.get('/graffitis/favs', listFavorites)
        api.get('/graffitis/:graffitiId', retrieveGraffiti)
        api.get('/graffitis', searchGraffiti)
        api.patch('/graffitis/:graffitiId/favs', toggleFavorite)

        server.use('/api', api)

        server.listen(PORT, () => console.log('server started'))
    })