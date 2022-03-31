const { verifyTokenAndGetUserId } = require('../helpers')
const { saveNote } = require('logic')

module.exports = (req, res) => {
    try {
        const userId = verifyTokenAndGetUserId(req)

        const { body: { text }, params: { recipeId } } = req

        saveNote(userId, recipeId, text)
            .then(() => res.status(201).send())
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}






