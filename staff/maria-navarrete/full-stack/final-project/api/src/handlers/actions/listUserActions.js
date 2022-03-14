const { listUserActions } = require('logic')
const { verifyTokenAndGetUserId } = require('../../helpers')

module.exports = (req, res) => {
    try {
        const userId = verifyTokenAndGetUserId(req)

        listUserActions(userId)
            .then(actions => res.json(actions))
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}