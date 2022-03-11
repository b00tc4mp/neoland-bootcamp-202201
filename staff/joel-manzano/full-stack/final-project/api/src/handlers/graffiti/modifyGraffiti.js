const { modifyGraffiti } = require('logic')
const { verifyTokenAndGetUserId } = require('../helpers')

module.exports = (req, res) => {
    try {
        const userId = verifyTokenAndGetUserId(req)
        const { body: { artist, city, street, number, postalCode, location, style, description, image, status, spray, colors }, params: { graffitiId } } = req
        
        modifyGraffiti(userId, graffitiId, artist, city, street, number, postalCode, location, style, description, image, status, spray, colors)
            .then(() => res.status(204).send())
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}