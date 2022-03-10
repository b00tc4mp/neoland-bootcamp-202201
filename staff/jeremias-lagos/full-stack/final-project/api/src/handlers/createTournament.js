const { createTournament } = require('logic')
const { verifyTokenAndGetUserId } = require('../helpers')

module.exports = (req, res) => {
    try {

        const userId = verifyTokenAndGetUserId(req)

        const { body: { title, description, location, image, date } } = req

        createTournament(userId, title, description, location, image, date)
            .then(() => res.status(201).send())
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}