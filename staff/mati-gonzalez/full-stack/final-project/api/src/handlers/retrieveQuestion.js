const { verifyTokenAndGetUserId } = require('../helpers')
const { retrieveQuestion } = require('logic')

module.exports = (req, res) => {
    try {
        const questionId = verifyTokenAndGetQuestionId(req)

        retrieveQuestion(questionId)
            .then(question => res.json(question))
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}