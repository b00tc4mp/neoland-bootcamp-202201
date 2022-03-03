const { mongoose: { connect, disconnect } } = require('data')
const express = require('express')
const { 
    handlerRegisterUser,
    handlerAuthenticateUser,
    handlerRetrieveUser,
    handlerUpdateUser,
    handlerUpdateUserPassword,
    handlerDeleteUser,
    handlerCreateNote,
    handlerListNotes,
    handlerListPublicNotesFromUser,
    handlerListPublicNotes,
    handlerRetrieveNote,
    handlerUpdateNote,
    handlerDeleteNote
} = require('./handlers')

const cors = require('cors')
const jwt = require('jsonwebtoken')

connect('mongodb://localhost:27017/demo-db')
    .then(() => console.log('db connected'))
    .then(() => {
        const server = express()
        server.use(cors())
        const jsonBodyParser = express.json()
        const api = express.Router()

        api.post('/users', jsonBodyParser, handlerRegisterUser)

        api.post('/users/auth', jsonBodyParser, handlerAuthenticateUser)

        api.get('/users', handlerRetrieveUser)

        api.patch('/users', jsonBodyParser, handlerUpdateUser)

        api.patch('/users/change-password', jsonBodyParser, handlerUpdateUserPassword)

        api.delete('/users', jsonBodyParser, handlerDeleteUser)

        api.post('/notes', jsonBodyParser, handlerCreateNote)

        api.get('/notes', jsonBodyParser, handlerListNotes)

        api.get('/notes/public', jsonBodyParser, handlerListPublicNotes)

        api.get('/users/:userId/notes/public', jsonBodyParser, handlerListPublicNotesFromUser)

        api.get('/notes/:noteId', jsonBodyParser, handlerRetrieveNote)

        api.patch('/notes/:noteId', jsonBodyParser, handlerUpdateNote)

        api.delete('/notes/:noteId', jsonBodyParser, handlerDeleteNote)


       

        server.use('/api', api)

        server.listen(8080, () => console.log('server started'))
    })