const { models: { Question } } = require('data')
const { validators: { validateString, validateArray } } = require('commons')

function findQuestions(categories) {
    validateArray(categories)
    categories.forEach(category => validateString(category, 'category'))

    return Question.find({ categories: { $all: categories } }).populate('user')
        .then(_questions => {
            // TODO sanitise and return
            const questions = _questions.map(_question => {
                const question = _question._doc
                question.id = question._id.toString()
                question.user = question.user.username

                delete question._id
                delete question.__v

                return question
            })
            return questions

        })
}

module.exports = findQuestions