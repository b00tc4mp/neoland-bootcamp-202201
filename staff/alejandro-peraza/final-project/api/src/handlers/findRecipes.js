const { findRecipesByDestilled, findRecipesByTitle, findRecipesByType } = require('logic')

module.exports = (req, res) => {
    try {
        const { query: { title, distilled, type } } = req

        if (title)
            return findRecipesByTitle(title)
                .then(recipes => res.json(recipes))
                .catch(error => res.status(400).json({ error: error.message }))
        else if (distilled)
            return findRecipesByDestilled(distilled)
                .then(recipes => res.json(recipes))
                .catch(error => res.status(400).json({ error: error.message }))
        else if (type)
            return findRecipesByType(type)
                .then(recipes => res.json(recipes))
                .catch(error => res.status(400).json({ error: error.message }))

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}