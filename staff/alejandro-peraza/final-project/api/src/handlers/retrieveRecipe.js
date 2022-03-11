const { retrieveRecipe } = require('logic')
const { verifyTokenAndGetUserId } = require('../helpers')

module.exports = (req, res) => {
    try {

        const userId = verifyTokenAndGetUserId(req)
        const { params: { recipeId } } = req


        retrieveRecipe(userId, recipeId)
            .then(recipe => res.json(recipe))
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}