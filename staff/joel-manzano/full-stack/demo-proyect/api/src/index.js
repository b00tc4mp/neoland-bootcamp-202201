require('dotenv').config()

const { mongoose: { connect, disconnect } } = require('data')
const express = require('express')
const {

    RegisterUser,
    RetrieveUser,
    AuthenticateUser,
    UpdateUser,
    UpdateUserPassword,
    DeleteUser,
    CreateNote,
    ListNotes,
    ListPublicNotes,
    UpdateNote,
    RetrieveNote,
    DeleteNote,
    ListPublicNotesFromUser

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

        // CRUD USERS
        ////////////////////////////////////////////////////////////////////////////////////////
        // CREATE | POST  READ | GET  UPDATE | PATCH  DELETE | DELETE
        // AUTH | POST
        
        api.post('/users', jsonBodyParser, RegisterUser)
        api.post('/users/auth', jsonBodyParser, AuthenticateUser)
        api.get('/users', jsonBodyParser, RetrieveUser)
        api.patch('/users', jsonBodyParser, UpdateUser)
        api.patch('/users/change-password', jsonBodyParser, UpdateUserPassword)
        api.delete('/users',  jsonBodyParser, DeleteUser)

        ////////////////////////////////////////////////////////////////////////////////////////

        api.post('/notes', jsonBodyParser, CreateNote)
        api.get('/notes', jsonBodyParser, ListNotes)
        api.get('/notes/public', jsonBodyParser, ListPublicNotes)
        api.patch('/notes/:noteId', jsonBodyParser, UpdateNote)     
        api.get('/notes/:noteId', RetrieveNote)
        api.delete('/notes/:noteId', jsonBodyParser, DeleteNote)
        api.get('/users/:userId/notes/public', jsonBodyParser, ListPublicNotesFromUser)

        server.use('/api', api)
        server.listen(8080, () => console.log('server started'))
    })

// api.get('/hello', (req, res) => { // middleware
//     const name = req.query.name

//     res.set('Content-type', 'text/html')
//     //res.set('Content-type', 'application/json')

//     return res.send(`<h1>Hello, ${name}!</h1>`)
//     //res.status(200).json({ hello: name })
// })
