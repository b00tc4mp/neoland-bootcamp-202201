const { mongoose: { connect, disconnect } } = require('data')
const express = require('express')
const { registerUser, authenticateUser, registerUser, createNote, listNotes, updateNote, deleteNote, updateUserPassword } = require('logic')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const { updateNote } = require('../../logic/src')

connect('mongodb://localhost:2717/demo-db')
    .then(() => console.log('db connected'))
    .then(() => {
        const server = express()

        server.use(cors())

        const jsonBodyParser = express.json()

        const api = express.Router()

        api.get('/users', jsonBodyParser, (req, res) => { //middleware
            try {
                const { body: { name, email, password } } = req

                registerUser(name, email, password)
                    .then(() => res.status(201).send())
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })

        api.post('/users/auth', jsonBodyParser, (req, res) => {
            try {
                const { body: { email, password } } = req

                authenticateUser(email, password)
                    .then(id => {
                        const token = jwt.sign({ sub: id, exp: Math.floor(Date.now() / 1000) + 60 * 60 }, 'mi secreto')

                        res.json({ token })
                    })
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })

        api.get('/users', (req, res) => {
            try {
                const { headers: { authorization } } = req
                const [, token] = authorization.split(' ')
                const payload = jwt.verify(token, 'mi secreto')
                const { sub: id } = payload

                retrieveUser(id)
                    .then(user => res.json(user))
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })

        api.post('/notes', jsonBodyParser, (req, res) => {
            try {
                const { headers: { authorization }, body: { text, color } } = req
                const [, token] = authorization.split(' ')
                const payload = jwt.verify(token, 'mi secreto')
                const { sub: id } = payload

                createNote(id, text, color)
                    .then(() => res.status(201).send())
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })

        api.get('/notes', (req, res) => {
            try {
                const { headers: { authorization } } = req
                const [, token] = authorization.split(' ')
                const payload = jwt.verify(token, 'mi secreto')
                const { sub: id } = payload

                listNotes(id)
                    .then(notes => res.json(notes))
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })

        api.patch('/notes', jsonBodyParser, (req, res) => {
            try {
                const { headers: { authorization }, body: { id, text, color } } = req
                const [, token] = authorization.split(' ')
                const payload = jwt.verify(token, 'mi secreto')
                const { sub: id } = payload

                updateNote(id, text, color)
                    .then(notes => res.json(notes))
                    .catch(error => res.status(400).json({ error: error.message }))

            } catch(error) {
                res.status(400).json({ error: error.message })
            }
        })

        api.delete('/notes', jsonBodyParser, (req, res) => {
            try {
                const { headers: { authorization }, body: {id} } = req
                const [, token] = authorization.split(' ')
                jwt.verify(token, 'mi secreto')

                deleteNote(id)
                    .then(() => res.status(201).send())
                    .catch(error => { throw error })

            } catch(error) {
                res.status(400).json({ error: error.message })
            }
        })

        api.patch('/users/change-password', jsonBodyParser, (req, res) => {
            try {
                const { headers: { authorization }, body: {currPassword, newPassword } } = req
                const [, token] = authorization.split(' ')
                const payload = jwt.verify(token, 'mi secreto')
                const { sub: id } = payload

                updateUserPassword({ id, currPassword, newPassword })
                    .then(() => res.status(200).send())
                    .catch(error => { throw error })

            } catch(error) {
                res.status(400).json({ error: error.message })
            }
        })

        server.use('/api', api)

        server.listen(8080, () => console.log('server started'))
    })

const api = express()



// api.get('/hello', (req, res) => { // middleware
//     const name = req.query.name

//     res.set('Content-type', 'text/html')
//     //res.set('Content-type', 'application/json')

//     return res.send(`<h1>Hello, ${name}!</h1>`)
//     //res.status(200).json({ hello: name })
// })

