const { mongoose: { connect, disconnect } } = require('data')
const express = require('express')
const {
    registerUser,
    authenticateUser,
    retrieveUser,
    createNote,
    listNotes,
    updateNote,
    listPublicNotes,
    listPublicNotesFromUser,
    deleteNote,
    retrieveNote
} = require('./handlers')

const cors = require('cors')

connect('mongodb://localhost:27017/demo-db')
    .then(() => console.log('db connected'))
    .then(() => {
        const server = express()

        server.use(cors())

        const jsonBodyParser = express.json()

        const api = express.Router()

        api.post('/users', jsonBodyParser, registerUser)
        api.post('/users/auth', jsonBodyParser, authenticateUser)
        api.get('/users', retrieveUser)
        
        api.post('/notes', jsonBodyParser, createNote)
        api.get('/notes', listNotes)
        api.patch('/notes/:noteId', jsonBodyParser, updateNote)
        api.get('/notes/public', listPublicNotes)
        api.get('/users/:userId/notes/public', listPublicNotesFromUser)
        api.delete('/notes/:noteId', jsonBodyParser, deleteNote)
        api.get('/notes/:noteId', jsonBodyParser, retrieveNote)

        server.use('/api', api)

        server.listen(8080, () => console.log('server started'))
    })