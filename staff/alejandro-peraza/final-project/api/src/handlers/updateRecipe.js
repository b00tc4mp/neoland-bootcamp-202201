const { updateRecipe } = require('logic')
const { verifyTokenAndGetUserId } = require('../helpers')

module.exports = (req, res) => {
    try {
        
        const userId = verifyTokenAndGetUserId(req)
        const { body: { name, type, destilled, description, comment }, params: { recipeId } } = req

        updateRecipe(userId, recipeId, name, type, destilled, description, comment)
            .then(() => res.status(204).send())
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}