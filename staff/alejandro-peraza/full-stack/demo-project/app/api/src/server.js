const { mongoose: { connect, disconnect }} = require('data')
const express = require('express')
const { registerUser } = require('logic')
const cors = require('cors')

connect('mongodb://localhost:27017/demo-db')
    .then(() => console.log('db connected'))
    .then(() => {
        const server = express()

        server.use(cors())

        const jsonBodyParser = express.json()
        
        const api = express.Router()

        api.get('/hello', (req, res) => { // middleware
            //const name = req.query.name
            const { name, surname } = req.query
        
            //res.set('Content-type', 'text/html')
            //res.set('Content-type', 'application/json')
        
            //return res.send(`<h1>Hello, ${name}!</h1>`)
            //res.status(200).json({ hello: { name, surname } })
            res.json([name, surname])
        })
        
        api.post('/users', jsonBodyParser, (req, res) => {
            try {
                const { body: { name, email, password } } = req

                registerUser(name, email, password)
                    .then(() => res.status(201).send())
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch(error) {
                res.status(400).json({ error: error.message })
            }
        })

        server.use('/api', api)
        
        server.listen(8080, () => console.log('server started'))
    })