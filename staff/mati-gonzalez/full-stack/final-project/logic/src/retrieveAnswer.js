const { models: { Answer } } = require('data')
const { validators: { validateId } } = require('commons')

function retrieveAnswer(userId, answerId) {
    validateId(userId, 'userId')
    validateId(answerId, 'answerId')

    return Answer.findById(answerId).lean().populate('user').populate('question')
        .then(answer => {

            if(!answer) throw new Error(`answer with id ${answerId} does not exist`)

                answer.id = answer._id.toString()

                answer.userId = answer.user._id.toString()
                answer.userName = answer.user.username

                answer.questionId = answer.question._id.toString()
                answer.question = answer.question.text

                delete answer.__v
                delete answer._id
                delete answer.user

                delete answer.question.id
                delete answer.question.date

                

    
                return answer
            
        })
}

module.exports = retrieveAnswer