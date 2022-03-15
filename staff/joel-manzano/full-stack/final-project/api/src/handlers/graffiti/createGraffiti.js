const { verifyTokenAndGetUserId } = require('../helpers')
const { createGraffiti } = require('logic')

module.exports = (req, res) => {
    try {
        
        const userId = verifyTokenAndGetUserId(req)
       

        const { body: { artist, description, image, city, address, postalCode, location, style, status, spray, color } } = req
        createGraffiti(userId, artist, description, image, city, address, postalCode, location, style, status, spray, color)
            .then(() => res.status(201).send())
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}