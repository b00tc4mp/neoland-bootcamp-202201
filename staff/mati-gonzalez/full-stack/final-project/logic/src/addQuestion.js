const { validators: { validateId, validateString } } = require('commons')
const { models: { Question } } = require('data')

function addQuestion(userId, text, categories) {
    validateId(userId, 'userId')
    validateString(text, 'text')

    return Question.create({ user: userId, text, categories})
        .then(question => { })
}

module.exports = addQuestion
