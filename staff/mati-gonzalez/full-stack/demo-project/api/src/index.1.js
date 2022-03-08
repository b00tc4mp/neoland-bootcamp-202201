const express = require('express')

const api = express()

const jsonBodyParser = express.json()

api.get('/hello', (req, res) => { // middleware
    //const name = req.query.name
    const { name, surname } = req.query

    //res.set('Content-type', 'text/html')
    //res.set('Content-type', 'application/json')

    //return res.send(`<h1>Hello, ${name}!</h1>`)
    //res.status(200).json({ hello: { name, surname } })
    res.json([name, surname])
})

api.post('/hello', jsonBodyParser, (req, res) => { // middleware
    const { name, surname } = req.body

    res.json([name, surname])
})

api.listen(8080, () => console.log('server started'))