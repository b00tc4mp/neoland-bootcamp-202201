const { listNotes } = require('logic')
const { verifyTokenAndGetUserId } = require('../helpers')

module.exports = (req, res) => {

    const userId = verifyTokenAndGetUserId(req)

    try {
        
        listNotes(userId)
            .then(notes => res.json(notes))
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}



