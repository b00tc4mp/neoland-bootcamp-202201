const { createNote } = require('logic')
const jwt = require('jsonwebtoken')

const CreateNote = (req, res) => { //middleware
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
}   
    
module.exports = CreateNote