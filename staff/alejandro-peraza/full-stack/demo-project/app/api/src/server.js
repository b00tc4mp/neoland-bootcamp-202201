const express = require('express')

const api = express()

api.get('/hello', (req, res) => {
    const name = req.query.name

    return res.send(`<h1>Hello, ${name}!</h1>`)
})