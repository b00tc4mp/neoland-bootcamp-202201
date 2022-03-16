const { updateTournament } = require('logic')
const { verifyTokenAndGetUserId } = require('../helpers')

module.exports = (req, res) => {
    try {
        const userId = verifyTokenAndGetUserId(req)
        const { body: { title, description, location, image, date }, params: { tournamentId } } = req

        updateTournament(userId, tournamentId, title, description, location, image, new Date(date))
            .then(() => res.status(204).send())
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}