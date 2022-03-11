const { verifyTokenAndGetUserId } = require('../helpers')
const { createGraffiti } = require('logic')

module.exports = (req, res) => {
    try {
        
        // Falta verificar el token y sacar el userId
        const userId = verifyTokenAndGetUserId(req)
       

        const { body: { artist, city, street, number, postalCode, location, style, description, image, status, spray, colors } } = req
        createGraffiti(userId, artist, city, street, number, postalCode, location, style, description, image, status, spray, colors)
            .then(() => res.status(201).send())
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}