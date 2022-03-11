const { validators: { validateId, validateString } } = require('commons')
const { models: { Answer } } = require('data')

function addAnswer(userId, questionId, text) {
    validateId(userId, 'userId')
    validateId(questionId, 'questionId')
    validateString(text, 'text')

    return Answer.create({ user: userId, question: questionId, text })
        .then(answer => { })
}

module.exports = addAnswer
