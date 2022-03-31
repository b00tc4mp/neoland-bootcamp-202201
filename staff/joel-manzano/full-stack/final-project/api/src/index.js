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
const { appendFile } = require('fs')

const { env: { PORT, MONGODB_URL } } = process

connect(MONGODB_URL)
    .then(() => console.log('db connected'))
    .then(() => {
        const server = express()
        server.use(cors())
        //server.use(jsonBodyParser.json())
        const jsonBodyParser = express.json({limit:'50mb'})
        const api = express.Router()

        api.patch('/users/change-password', jsonBodyParser, updateUserPassword)
        api.post('/users/auth', jsonBodyParser, authenticateUser)
        api.patch('/users', jsonBodyParser, updateUser)
        api.get('/users', retrieveUser)
        api.post('/users', jsonBodyParser, registerUser) 
        api.delete('/users', jsonBodyParser, deleteUser)

        api.patch('/graffitis/:graffitiId/favs', toggleFavorite)
        api.get('/graffitis/all', listGraffitis)
        api.get('/graffitis/favs', listFavorites)
        api.get('/graffitis/:graffitiId', retrieveGraffiti)
        api.patch('/graffitis/:graffitiId', jsonBodyParser, modifyGraffiti)
        api.delete('/graffitis/:graffitiId', deleteGraffiti)
        api.post('/graffitis', jsonBodyParser, createGraffiti)
        api.get('/graffitis', searchGraffiti)

        server.use('/api', api)

        server.listen(PORT, () => console.log('server started'))
    })