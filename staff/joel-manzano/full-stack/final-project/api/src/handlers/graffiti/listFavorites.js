const { verifyTokenAndGetUserId } = require('../helpers')
const { listFavorites } = require('logic')

module.exports = (req, res) => {
    try {
        const userId = verifyTokenAndGetUserId(req)
debugger
        listFavorites(userId)
            .then(favorites => res.json(favorites))
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}