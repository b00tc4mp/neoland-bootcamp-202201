const { verifyTokenAndGetUserId } = require('../helpers')
const { updateComment } = require('logic')

module.exports = (req, res) => {
    try {
        const userId = verifyTokenAndGetUserId(req)
        
        const { body: { text }, params: { commentId } } = req

        updateComment(userId, commentId, text)
            .then(() => res.status(204).send())
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}