const { verifyTokenAndGetUserId } = require('../helpers')
const { deleteRecipe } = require('logic')

module.exports = (req, res) => {
    try {
        debugger
        const userId = verifyTokenAndGetUserId(req)

        const { params: { recipeId } } = req

        deleteRecipe(userId, recipeId)
            .then(() => res.status(204).send())
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}