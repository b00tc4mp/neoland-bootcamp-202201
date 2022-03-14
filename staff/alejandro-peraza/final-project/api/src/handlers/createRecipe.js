const { verifyTokenAndGetUserId } = require('../helpers')
const { createRecipe } = require('logic')

module.exports = (req, res) => {
    try {

        const userId = verifyTokenAndGetUserId(req)
        const { body: { title, description, image, type, destilled } } = req

        createRecipe( userId, title, type, destilled, description, image)
            .then(() => res.status(201).send())
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}