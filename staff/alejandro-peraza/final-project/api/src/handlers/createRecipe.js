const { createRecipe } = require('logic')

module.exports = (req, res) => {
    try {

        const { body: { title, type, destilled, description, image } } = req

        createRecipe( title, type, destilled, description, image)
            .then(() => res.status(201).send())
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}