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
    createNote,
    retrieveNote,
    updateNote,
    retrieveMoods
} = require ('./handlers')

const cors = require('cors')
const { env: { PORT, MONGODB_URL }} = process



connect(MONGODB_URL)
    .then(() => console.log('db connected'))
    .then(() => {
        const server = express()
        server.use(cors())
        const jsonBodyParser = express.json()
        const api = express.Router()


        api.post('/user', jsonBodyParser, registerUser)

        api.post('/users/auth', jsonBodyParser, authenticateUser)

        api.get('/user', retrieveUser)

        api.patch('/user', jsonBodyParser, updateUser)

        api.patch('/user/change-password', jsonBodyParser, updateUserPassword)

        api.delete('/user', jsonBodyParser, deleteUser)

        api.post('/notes', jsonBodyParser, createNote)

        api.get('/user/retrieve', retrieveNote)

        api.get('/user/notes/moods', retrieveMoods)

       
        server.use('/api', api)

        server.listen(PORT, () => console.log('server started'))
    })
