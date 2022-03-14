const { toggleFavorite } = require("logic")
const { verifyTokenAndGetUserId } = require('../helpers')

module.exports = (req, res) => {
    try {

        const userId = verifyTokenAndGetUserId(req)
        const { body: { racketId } } = req

        toggleFavorite(userId, racketId)
            .then(comments => res.json(comments))
            .catch(({ message }) => res.status(400).json({ error: message }))
    } catch ({ message }) {
        res.status(400).json({ error: message })
    }

}

