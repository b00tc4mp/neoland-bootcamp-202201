const { listAnswers } = require('logic')
// const { verifyTokenAndGetUserId } = require('../helpers')

module.exports = ( req, res) => {
        try{
            listAnswers()
            .then(answers => res.json(answers))
            .catch(error => res.status(400).json({ error: error.message }))
        } catch (error) {
            res.status(400).json({ error: error.message})
        }
}