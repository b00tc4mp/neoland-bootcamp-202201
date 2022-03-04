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
    createNote,
    retrieveNote,
    updateNote,
    deleteNote,
    listNotes,
    listPublicNotes,
    listPublicNotesFromUser
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

        api.post('/users', jsonBodyParser, registerUser) //ojo! no ejecutar funcion: handlerRegisterUser()
        api.post('/users/auth', jsonBodyParser, authenticateUser)
        api.get('/users', retrieveUser)
        api.patch('/users', jsonBodyParser, updateUser)
        api.patch('/users/change-password', jsonBodyParser, updatePassword)
        api.delete('/users', jsonBodyParser, deleteUser)

        api.post('/notes', jsonBodyParser, createNote)
        api.get('/notes/:noteId', jsonBodyParser, retrieveNote)
        api.patch('/notes/:noteId', jsonBodyParser, updateNote)
        api.delete('/notes/:noteId', jsonBodyParser, deleteNote)
        api.get('/notes', listNotes)
        api.get('/notes/public', listPublicNotes)
        api.get('/users/:userId/notes/public', listPublicNotesFromUser)


        server.use('/api', api)

        server.listen(PORT, () => console.log('server started'))
    })
