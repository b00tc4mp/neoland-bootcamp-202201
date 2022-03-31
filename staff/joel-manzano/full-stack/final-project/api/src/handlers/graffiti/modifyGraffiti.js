const { modifyGraffiti } = require('logic')
const { verifyTokenAndGetUserId } = require('../helpers')

module.exports = (req, res) => {
    try {
        const userId = verifyTokenAndGetUserId(req)
        const { body: { artist, description, image, city, address, postalCode, location, style, condition, spray, color }, params: { graffitiId } } = req
        
        modifyGraffiti(userId, graffitiId, artist, description, image, city, address, postalCode, location, style, condition, spray, color)
            .then(() => res.status(204).send())
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}