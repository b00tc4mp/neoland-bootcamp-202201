const { models: { Answer } } = require('data')

function listAnswers(questionId){
    return Answer.find({ question: questionId }).lean().populate('user')
    .then(_answers => {

        const answers = _answers.map(answer => {
            // debugger
            answer.id = answer._id.toString()

            answer.userId = answer.user._id.toString()
            answer.userName = answer.user.username

            answer.questionId = answer.question._id.toString()
            answer.question = answer.question.text

            delete answer.__v
            delete answer._id
            delete answer.user

            // delete answer.question.id
            // delete answer.question.date

            


            return answer
        
        })
        return answers
    })
} 

module.exports = listAnswers