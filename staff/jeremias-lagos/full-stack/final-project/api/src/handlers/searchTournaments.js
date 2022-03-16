const { searchTournaments } = require('logic')

module.exports = (req, res) => {
    try {
        const { query: { query, location, date } } = req

        searchTournaments(query || null, location || null, date ? new Date(date) : null)
            .then(tournaments => res.status(200).json(tournaments))
            .catch(({ message }) => res.status(400).json({ error: message }))
    } catch ({ message }) {
        res.status(400).json({ error: error.message })
    }

}