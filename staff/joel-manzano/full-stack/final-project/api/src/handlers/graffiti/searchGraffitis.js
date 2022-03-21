const { searchGraffitis } = require('logic')

module.exports = (req, res) => {

    try {

        const { query: { query } } = req

       searchGraffitis(query)
            .then(comments => res.json(comments))
            .catch(({ message }) => res.status(400).json({ error: message }))
    } catch ({ message }) {
        res.status(400).json({ error: message })
    }

}