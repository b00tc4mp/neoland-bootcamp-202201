const { verifyTokenAndGetUserId } = require('../helpers')
const { retrieveComment } = require('logic')

module.exports = (req, res) => {
    try {
        const userId = verifyTokenAndGetUserId(req)

        const { params: { locationId, commentId } } = req  //2 params?

        retrieveComment(userId, locationId, commentId) //if only 1 param, remove here
            .then(location => res.json(location))
            .catch(error => res.status(400).json({ error: error.message }) )
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}