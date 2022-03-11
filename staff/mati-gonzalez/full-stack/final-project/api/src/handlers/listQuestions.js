const { listQuestions } = require('logic')
// const { verifyTokenAndGetUserId } = require('../helpers')

module.exports = ( res) => {
        listQuestions()
            .then(questions => res.json(questions))
            
}