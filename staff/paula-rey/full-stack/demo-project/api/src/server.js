const { mongoose: { connect, disconnect } } = require('data')
const express = require('express')
const { handlerRegisterUser, 
        handlerRetrieveUser,
        handlerAuthenticateUser,
        handlerUpdateUser,
        handlerUpdateUserPassword,
        handlerDeleteUser,
        handlerCreateNote,
        handlerRetrieveNote,
        handlerUpdateNote,
        handlerDeleteNote,
        handlerListNotes,
        handlerListPublicNotes,
        handlerListPublicNotesFromUser
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


        api.post('/users', jsonBodyParser, handlerRegisterUser) //ojo! no ejecutar funcion: handlerRegisterUser()

        api.post('/users/auth', jsonBodyParser, handlerAuthenticateUser)

        api.get('/users', handlerRetrieveUser)
        
        api.patch('/users', jsonBodyParser, handlerUpdateUser)

        api.patch('/users/change-password', jsonBodyParser, handlerUpdateUserPassword)

        api.delete('/users', jsonBodyParser, handlerDeleteUser)

        api.post('/notes', jsonBodyParser, handlerCreateNote)

        api.get('/notes/:noteId', jsonBodyParser, handlerRetrieveNote)

        api.patch('/notes/:noteId', jsonBodyParser, handlerUpdateNote)

        api.delete('/notes/:noteId', jsonBodyParser, handlerDeleteNote)

        api.get('/notes', handlerListNotes)

        api.get('/notes/public', handlerListPublicNotes)

        api.get('/users/:userId/notes/public', handlerListPublicNotesFromUser)


        server.use('/api', api)

        server.listen(8080, () => console.log('server started'))

    })