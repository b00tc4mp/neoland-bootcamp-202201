const { models: { User } } = require('data')
const { validators: { validateId } } = require('commons')

function listFollowsUsers(userId) {
    validateId(userId, 'user id')

    return User.findById(userId).lean().populate('follows')
    .then(user => {

        if (!user) throw new Error(`user with id ${userId} does not exist`)

        user.follows.forEach(follow => {

            follow.id = follow._id.toString()
            delete follow._id
            delete follow.__v
            delete follow.password
            delete follow.favorites
            delete follow.follows

            return follow
        })
        return user.follows
    })
}

module.exports = listFollowsUsers

