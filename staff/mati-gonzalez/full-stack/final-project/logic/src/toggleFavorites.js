const { models: { User, Question } } = require('data')
const { validators: { validateId } } = require('commons')

function toggleFavorite(userId, questionId) {

    validateId(userId, 'user id')
    validateId(questionId, 'question id')


    return Question.findById(questionId).lean().populate('user')
        .then(question => {
            if (!question) throw Error(`question with id ${questionId} does not exist`)
            return User.findById(userId)
        })
        .then(user => {
            if (!user) throw Error(`user with id ${userId} does not exist`)

            const index = user.favQuestions.indexOf(questionId)
            debugger
            if (index === -1) user.favQuestions.push(questionId)
            else user.favQuestions.splice(index, 1)

            return user.save()
        })
        .then(() => { })
}

module.exports = toggleFavorite