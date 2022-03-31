const { ListPublicNotesFromUser } = require('logic')
module.exports = (req, res) => { //middleware
    
    try {
        const { params: { userId } } = req

        ListPublicNotesFromUser(userId)
            .then(notes => res.json(notes))
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

