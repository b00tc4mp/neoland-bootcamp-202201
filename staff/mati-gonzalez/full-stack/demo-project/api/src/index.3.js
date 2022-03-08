const { mongoose: { connect, disconnect } } = require('data')
const express = require('express')  
const { registerUser, 
    authenticateUser, 
    retrieveUser,
    updateUser,
    updateUserPassword,
    deleteUser, 
    createNote, 
    listNotes,
    retrieveNote,
    listPublicNotes,
    listPublicNotesFromUser,
    updateNote, 
    deleteNote 
} = require('handler./s')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const AuthenticateUser = require('./s/AuthenticateUser')
const UpdateUser = require('./s/UpdateUser')
const UpdateUserPassword = require('./s/UpdateUserPassword')
const DeleteUser = require('./s/DeleteUser')

connect('mongodb://localhost:27017/demo-db')
    .then(() => console.log('db connected'))
    .then(() => {
        const server = express()

        server.use(cors())

        const jsonBodyParser = express.json()

        const api = express.Router()

        api.post('/users', jsonBodyParser, registerUser)

        api.post('/users/auth', jsonBodyParser, authenticateUser)

        api.get('/users', RetrieveUser )

        api.patch('/users', jsonBodyParser, updateUser)

        api.patch('/users/change-password', jsonBodyParser, updateUserPassword)

        api.delete('/users', jsonBodyParser, deleteUser)

        api.post('/notes', jsonBodyParser, createNote)

        api.get('/notes', )

        api.get('/notes/public', (req, res) => {
            try {
                listPublicNotes()
                    .then(notes => res.json(notes))
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })

        api.get('/users/:userId/notes/public', (req, res) => {
            try {
                const { params: { userId } } = req

                listPublicNotesFromUser(userId)
                    .then(notes => res.json(notes))
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })

        api.get('/notes/:noteId', (req, res) => {
            try {
                const { headers: { authorization }, params: { noteId } } = req
                const [, token] = authorization.split(' ')
                const payload = jwt.verify(token, 'mi super secreto')
                const { sub: userId } = payload

                retrieveNote(userId, noteId)
                    .then(note => res.json(note))
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })

        api.patch('/notes', jsonBodyParser, (req, res) => {
            try {
                const { headers: { authorization }, body: { id: noteId, text, color } } = req

                const [, token] = authorization.split(' ')

                const payload = jwt.verify(token, 'mi super secreto')

                const { sub: id } = payload

                updateNote(id, noteId, text, color)
                    .then(() => res.status(201).send())
                    .catch(error => { throw error })
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })

        api.delete('/notes', jsonBodyParser, (req, res) => {
            try {
                const { headers: { authorization }, body: { id: noteId } } = req

                const [, token] = authorization.split(' ')

                const payload = jwt.verify(token, 'mi super secreto')

                const { sub: id } = payload


                deleteNote(id, noteId)
                    .then(() => res.status(201).send())
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })


        server.use('/api', api)

        server.listen(8080, () => console.log('server started'))
    })