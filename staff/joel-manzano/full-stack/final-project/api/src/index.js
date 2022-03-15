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
    searchGraffiti

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
        api.post('/graffiti', jsonBodyParser, createGraffiti)
        api.patch('/graffiti/:graffitiId', jsonBodyParser, modifyGraffiti)
        api.delete('/graffiti/:graffitiId', jsonBodyParser, deleteGraffiti)
        api.get('/graffiti', jsonBodyParser, listGraffitis)
        api.get('/graffiti', jsonBodyParser, retrieveGraffiti)
        api.get('/graffitis', jsonBodyParser, searchGraffiti)


        server.use('/api', api)

        server.listen(PORT, () => console.log('server started'))
    })