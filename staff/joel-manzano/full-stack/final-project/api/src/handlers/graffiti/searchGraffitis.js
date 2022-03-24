const { searchGraffitis } = require('logic')

module.exports = (req, res) => {

    try {

        const { query: { q: query } } = req

       searchGraffitis(query)
            .then(graffitis => res.status(200).json(graffitis))
            .catch(({ message }) => res.status(400).json({ error: message }))
    } catch ({ message }) {
        res.status(400).json({ error: message })
    }

}