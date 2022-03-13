const { verifyTokenAndGetUserId } = require('../helpers')
const { deleteLocation } = require('logic')

module.exports = (req, res) => {
    try {
        const userId = verifyTokenAndGetUserId(req)

        const { params: { locationId } } = req

        deleteLocation(locationId, userId)
            .then(() => res.status(204).send())
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
