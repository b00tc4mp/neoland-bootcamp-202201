const { verifyTokenAndGetUserId } = require('../helpers')
const { retrieveComment } = require('logic')

module.exports = (req, res) => {
    try {
        const userId = verifyTokenAndGetUserId(req)

        const { params: { locationId, commentId } } = req  

        retrieveComment(userId, locationId, commentId) 
            .then(location => res.json(location))
            .catch(error => res.status(400).json({ error: error.message }) )
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}