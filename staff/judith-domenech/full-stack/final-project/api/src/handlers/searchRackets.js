const { searchRackets } = require('../helpers')

module.exports = (req, res) => {

    try {

        const { params: { query } } = req

       searchRackets(query)
            .then(comments => res.json(comments))
            .catch(({ message }) => res.status(400).json({ error: message }))
    } catch ({ message }) {
        res.status(400).json({ error: message })
    }

}
