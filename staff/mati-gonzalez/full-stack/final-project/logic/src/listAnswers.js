const { models: { Answer } } = require('data')
const { answer } = require('data/src/schemas')


function listAnswers(questionId){
    return Answer.find({ question: questionId }).lean().populate('user')
    .then(_answers => {

        const answers = _answers.map(answer => {
            // debugger
            answer.id = answer._id.toString()
            answer.user = answer.user.username
            delete answer._id
            delete answer.__v
            return answer
        
        })
        return answers
    })
} 

module.exports = listAnswers