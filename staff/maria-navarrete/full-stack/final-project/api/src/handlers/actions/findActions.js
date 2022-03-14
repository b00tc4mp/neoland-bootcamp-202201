const { findActions } = require('logic')
const { verifyTokenAndGetUserId } = require('../../helpers')

module.exports = (req, res) => {
    try {
        const userId = verifyTokenAndGetUserId(req)

        const { query: { query = null, reqBudget = null, reqTime = null } } = req

        const filters = { query, reqBudget: reqBudget && Number(reqBudget), reqTime: reqTime && Number(reqTime) }

        findActions(userId, filters)
            .then(actions => res.json(actions))
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}