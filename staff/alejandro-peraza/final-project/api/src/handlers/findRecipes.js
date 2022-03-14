const { findRecipes } = require('logic')

module.exports = (req, res) => {
    try {
        // .../recipes?title=...
        // .../recipes?distilled=... = maneras de buscar en insomnia por query
        const { query: { title, distilled, type }} = req
        const query = title || distilled || type
        findRecipes(query)
        .then(recipes => res.json(recipes))
        .catch(error => res.status(400).json({ error: error.message }))
            
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}