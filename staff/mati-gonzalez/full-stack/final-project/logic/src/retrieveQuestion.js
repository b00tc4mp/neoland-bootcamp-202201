const { models: { Question} } = require('data')
const { validators: { validateId } } = require('commons')

function retrieveQuestion(userId, questionId) {
    validateId(userId, 'userId')
    validateId(questionId, 'questionId')

    return Question.findById(questionId).populate('user')
        .then(question => {

            if(!question) throw new Error(`question with id ${noteId} does not exist`)

            if(question.user.id === userId ){
                const doc = question._doc

                doc.id = doc._id.toString()

                doc.userId = doc.user.id
                doc.userName = doc.user.name

    
                return doc
            }
            else throw new Error (`question with id ${noteId} is not public`)
            
        })
}

module.exports = retrieveQuestion