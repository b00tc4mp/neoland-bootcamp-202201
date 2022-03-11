const { listComments } = require('logic')

module.exports = (req, res) => {
    try {
        const { params: { commentId } } = req

        listComments(commentId)
            .then(notes => res.json(notes))
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}