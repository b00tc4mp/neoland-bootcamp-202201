const { verifyTokenAndGetUserId } = require('../helpers')
const { deleteTournament } = require('logic')

module.exports = (req, res) => {
    try {
        const userId = verifyTokenAndGetUserId(req)
        const { params: { tournamentId } } = req

        deleteTournament(userId, tournamentId)
            .then(() => res.status(204).send())
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}