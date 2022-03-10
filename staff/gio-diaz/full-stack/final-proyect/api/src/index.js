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
    retrieveNoteByData
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

        api.get('/notes/:noteId', retrieveNote)

        // api.get('/notes', retrieveNoteByData)

        // api.get('/notes/public', listPublicNotes)

       

       

         server.use('/api', api)

        server.listen(PORT, () => console.log('server started'))
    })
