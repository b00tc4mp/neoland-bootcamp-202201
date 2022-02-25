const express = require('express')

const api = express()

api.get('/hello', (req, res) => { // middleware
    const name = req.query.name

    //res.set('Content-type', 'text/html')
    res.set('Content-type', 'application/json')

    //return res.send(`<h1>Hello, ${name}!</h1>`)
    res.status(200).json({ hello: name })
})

api.listen(8080, () => console.log('server started'))