const { findProducts } = require('logic')

module.exports = (req, res) => {
    try {
        const { query: { q: query, description, color } } = req

        findProducts(query || null, description || null, color || null)
            .then(products => res.status(200).json(products))
            .catch(({ message }) => res.status(400).json({ error: message }))
    } catch ({ message }) {
        res.status(400).json({ error: message })
    }
}