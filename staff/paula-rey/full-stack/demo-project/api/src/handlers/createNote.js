const { createNote } = require('logic')
const jwt = require('jsonwebtoken')


module.exports = (req, res) => {
    try {
        const { headers: { authorization }, body: { text, color } } = req

        const [, token] = authorization.split(' ')

        const payload = jwt.verify(token, 'mi super secreto')

        const { sub: userId } = payload

        createNote(userId, text, color)
            .then(() => res.status(201).send())
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

