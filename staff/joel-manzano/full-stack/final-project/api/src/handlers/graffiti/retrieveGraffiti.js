const { retrieveGraffiti } = require('logic')
const { verifyTokenAndGetUserId } = require('../helpers')

module.exports = (req, res) => {
    try {
        const userId = verifyTokenAndGetUserId(req)
        const { params: { graffitiId } } = req

        retrieveGraffiti(userId, graffitiId)
            .then(graffiti => res.status(200).json(graffiti))
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}