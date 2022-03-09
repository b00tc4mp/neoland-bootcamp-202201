
const { createRecipe } = require('logic')

module.exports = (req, res) => {
    try {
      

        const { body: { name, type, destilled, description, /*image,*/ comment  } } = req

        createRecipe( name, type, destilled, description, /*image*/ comment)
            .then(() => res.status(201).send())
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}