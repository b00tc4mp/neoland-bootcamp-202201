const { models: { Question } } = require('data')
const { validators: { validateString } } = require('commons')

function findQuestions(categories) {
    validateArray(categories)
    categories.forEach(category => validateString(category, 'category'))

    return Question.find({ categories: { $all: categories } }).lean()
        .then(categories => {
            // TODO sanitise and return
        })
}