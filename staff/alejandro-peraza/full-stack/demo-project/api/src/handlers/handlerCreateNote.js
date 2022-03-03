const { createNote } = require('logic')
const jwt = require('jsonwebtoken')

const handlerCreateNote = (req, res) => {
    try {
        const { headers: { authorization }, body: { text, color, public } } = req

        const [, token] = authorization.split(' ')

        const payload = jwt.verify(token, 'mi super secreto')

        const { sub: id } = payload

        createNote(id, text, color, public)
            .then(() => res.status(201).send())
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = handlerCreateNote