const { findProducts } = require('logic')

module.exports = (req, res) => {
    try {
        const { query: { q: query } } = req

        findProducts(query)
            .then(products => res.status(200).json(products))
            .catch(({ message }) => res.status(400).json({ error: message }))
    } catch ({ message }) {
        res.status(400).json({ error: message })
    }
}