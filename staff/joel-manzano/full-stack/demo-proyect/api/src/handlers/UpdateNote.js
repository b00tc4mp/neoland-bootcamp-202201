const { updateNote } = require('logic')
const jwt = require('jsonwebtoken')

const UpdateNote = (req, res) => { //middleware
    try {
        const { headers: { authorization }, body: { text, color }, params: {noteId} } = req
        const [, token] = authorization.split(' ')
        const payload = jwt.verify(token, 'mi secreto')
        const { sub: userId } = payload

        updateNote(userId, text, color)
            .then(notes => res.json(notes))
            .catch(error => res.status(400).json({ error: error.message }))

    } catch(error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = UpdateNote