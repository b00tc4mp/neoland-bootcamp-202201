const { searchLocations } = require('logic')
const { verifyTokenAndGetUserId } = require('../helpers')

module.exports = (req, res) => {
    try {
        const userId = verifyTokenAndGetUserId(req)
        //const q = req.query.q
        const { query: { query = null, type = null, city = null } } = req

        searchLocations(userId, query, type, city)
            .then(locations => res.json(locations))
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}