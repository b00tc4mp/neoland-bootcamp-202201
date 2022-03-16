const { models: { User, Question } } = require('data')
const { validators: { validateId } } = require('commons')
const { question } = require('data/src/schemas')

function toggleFavorite(userId, questionId) {

    validateId(userId, 'userId')
    validateId(questionId, 'questionId')


    return Question.findById(questionId).lean().populate('user')
        .then(question => {
            if (!question) throw Error(`question with id ${questionId} does not exist`)
            if (question.user._id.toString() !== userId && !question.public) throw Error(`question with id ${questionId} is not public`)
            return User.findById(userId)
        })
        .then(user => {
            if (!user) throw Error(`user with id ${userId} does not exist`)

            const index = user.favQuestions.indexOf(questionId)

            if (index === -1) user.favQuestions.push(questionId)
            else user.favs.splice(index, 1)

            return user.save()
        })
        .then(() => { })
}

module.exports = toggleFavorite