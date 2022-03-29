const { verifyTokenAndGetUserId } = require('../helpers')
const { deleteComment } = require('logic')

module.exports = (req, res) => {
    try {
        const userId = verifyTokenAndGetUserId(req)

        const { params: { commentId } } = req  //2 params?

        deleteComment(userId, commentId) //if only 1 param, remove here
            .then(() => res.status(204).send())
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}