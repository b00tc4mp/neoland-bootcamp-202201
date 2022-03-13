const { verifyTokenAndGetUserId } = require('../helpers')
const { listFollows } = require('logic')

module.exports = (req, res) => {
    try {
        const userId = verifyTokenAndGetUserId(req)

        listFollows(userId)
            .then(follows => res.json(follows))
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}