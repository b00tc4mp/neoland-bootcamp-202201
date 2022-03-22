const { validators: { validateId } } = require('commons')
const { models: { User } } = require('data')

function listFavorites(userId) {
    validateId(userId, 'user id')

    return User.findById(userId).populate('favQuestions')
        .then(user => {
            if (!user) throw Error(`user with id ${userId} does not exist`)

            return Promise.all(user.favQuestions.map(favQuestion => favQuestion.populate('user')))
        })
        .then(favQuestions => favQuestions.map(_favQuestion => {
            debugger
            const favQuestion = _favQuestion._doc
            favQuestion.id = favQuestion._id.toString()
            favQuestion.userId = favQuestion.user._id.toString()
            favQuestion.username = favQuestion.user.username

            delete favQuestion.author
            delete favQuestion._id
            delete favQuestion.__v
            delete favQuestion.public
            delete favQuestion.user

            return favQuestion
        }))
}

module.exports = listFavorites