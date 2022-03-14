const { verifyTokenAndGetUserId } = require('../helpers')
const { listUserLocations } = require('logic')

module.exports = (req, res) => {
    try {
        const userId = verifyTokenAndGetUserId(req)

        listUserLocations(userId)
            .then(locations => res.json(locations))
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}