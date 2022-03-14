const { createAction } = require('logic')
const { verifyTokenAndGetUserId } = require('../../helpers')

module.exports = (req, res) => {
    try {
        const userId = verifyTokenAndGetUserId(req)
        const { body: { description, public, reqTime, reqBudget } } = req

        createAction(userId, description, public, reqTime, reqBudget)
            .then(() => res.status(201).send())
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

