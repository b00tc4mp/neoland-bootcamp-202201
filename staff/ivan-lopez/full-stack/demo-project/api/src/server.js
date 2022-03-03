const { mongoose: { connect, disconnect } } = require('data')
const express = require('express')

const { 
    handlerDeleteUser,
    handlerRetrieveNote,
    handlerDeleteNote,
    handlerPublicNotesFromUser,
    handlerListPublicNotes,
    handlerUpdateUserPassword,
    handlerUpdateUser,
    handlerUpdateNote,
    handlerListNotes,
    handlerCreateNote,
    handlerAuthenticateUser,
    handlerRegisterUser, 
    handlerRetrieveUser
} = require('./handlers')



const {
    
    
 } = require('logic')



const cors = require('cors')


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
        api.post('/notes', jsonBodyParser, handlerCreateNote)
        api.get('/notes', handlerListNotes)
        api.patch('/notes/:noteId', jsonBodyParser, handlerUpdateNote)
        api.patch('/users', jsonBodyParser, handlerUpdateUser)
        api.patch('/users/change-password', jsonBodyParser, handlerUpdateUserPassword)
        api.get('/notes/public', handlerListPublicNotes)
        api.get('/users/:userId/notes/public', handlerPublicNotesFromUser)
        api.delete('/notes/:noteId',  jsonBodyParser, handlerDeleteNote)
        api.get('/notes', handlerRetrieveNote)
        api.delete('/users',  jsonBodyParser, handlerDeleteUser)
      

        server.use('/api', api)
        server.listen(8080, () => console.log('server started'));
})