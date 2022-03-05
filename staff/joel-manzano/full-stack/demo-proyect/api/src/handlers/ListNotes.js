const { listNotes } = require('logic')
const jwt = require('jsonwebtoken')

const ListNotes = (req, res) => { //middleware
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
}

module.exports = ListNotes