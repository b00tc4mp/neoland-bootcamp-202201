const { toggleFavorite } = require("logic")
const { verifyTokenAndGetUserId } = require('../helpers')

module.exports = (req, res) => {
    try {

        const userId = verifyTokenAndGetUserId(req)
        const { body: { locationId } } = req

        toggleFavorite(userId, locationId)
        .then(favorites => res.json(favorites))
        .catch(error => res.status(400).json({ error: error.message }))
} catch (error) {
    res.status(400).json({ error: error.message })
}
}