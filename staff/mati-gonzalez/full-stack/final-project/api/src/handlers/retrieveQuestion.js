const { retrieveQuestion } = require('logic')
const { verifyTokenAndGetUserId } = require('../helpers')

module.exports = (req, res) => {
    try {
        const userId = verifyTokenAndGetUserId(req)
        const { params: { questionId } } = req

        retrieveQuestion(userId, questionId)
            .then(question => res.json(question))
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}