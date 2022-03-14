const { searchYourRacket } = require('logic')
const { verifyTokenAndGetUserId } = require("../helpers")

module.exports = (req, res) => {
    try {
        const userId = verifyTokenAndGetUserId(req)
        const type = req.query.type
        const weight = req.query.weight
        const player = req.query.player
        const level = req.query.level


        searchYourRacket(userId, {type, weight, player, level} )
            .then(results => res.json(results))
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

}
