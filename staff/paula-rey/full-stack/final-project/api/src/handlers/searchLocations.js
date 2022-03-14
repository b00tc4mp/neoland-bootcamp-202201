const { searchLocations } = require('logic')

module.exports = (req, res) => {
    try {
        //const q = req.query.q
        const { query: { query } } = req

        searchLocations(query)
            .then(locations => res.json(locations))
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}