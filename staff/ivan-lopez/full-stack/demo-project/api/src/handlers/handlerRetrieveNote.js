const handlerRetrieveNote = (req, res) => {
const jwt = require('jsonwebtoken')

    try {
        const { headers: { authorization } } = req

        const [, token] = authorization.split(' ')

        const payload = jwt.verify(token, 'mi super secreto')

        const { sub: id } = payload

        retrieveNote(id)
            .then(note => res.json(note))
            .catch(error => res.status(400).json({ error: error.message }))
        } catch (error) {
            res.status(400).json({ error: error.message })
        }
    }

    module.exports = handlerRetrieveNote