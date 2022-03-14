const { updateAction } = require('logic')
const { verifyTokenAndGetUserId } = require('../../helpers')

module.exports = (req, res) => {
    try {
        const userId = verifyTokenAndGetUserId(req)
        const { body: { description, public, reqTime, reqBudget }, params: { actionId } } = req

        updateAction(userId, actionId, description, public, reqTime, reqBudget)
            .then(() => res.status(200).send())
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}