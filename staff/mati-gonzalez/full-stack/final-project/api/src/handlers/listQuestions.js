const { listQuestions } = require('logic')
// const { verifyTokenAndGetUserId } = require('../helpers')

module.exports = (req, res) => {
        try{
            listQuestions()
            .then(questions => res.json(questions))
            .catch(error => res.status(400).json({ error: error.message }))
        } catch (error) {
            res.status(400).json({ error: error.message})
        }
}