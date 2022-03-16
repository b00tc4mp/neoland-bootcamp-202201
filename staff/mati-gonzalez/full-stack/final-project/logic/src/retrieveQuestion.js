const { models: { Question} } = require('data')
const { validators: { validateId } } = require('commons')

function retrieveQuestion(userId, questionId) {
    validateId(userId, 'userId')
    validateId(questionId, 'questionId')

    return Question.findById(questionId).lean().populate('user')
        .then(question => {

            if(!question) throw new Error(`question with id ${questionId} does not exist`)

                question.id = question._id.toString()

                question.userId = question.user._id.toString()
                question.userName = question.user.username

                delete question.__v
                delete question._id
                delete question.user

    
                return question
            
        })
}

module.exports = retrieveQuestion