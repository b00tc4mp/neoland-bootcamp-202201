const { models: { User } } = require('data')
const { validators: { validateId } } = require('commons')

function listFollows(userId) {
    validateId(userId, 'userId')

    return User.findById(userId).lean().populate('follows')
    .then(user => {

        if (!user) throw new Error(`user with id ${userId} does not exist`)

        const follows = user.follows.map(follow => {

            follow.id = follow._id.toString()
            delete follow._id
            delete follow.__v
            delete follow.password
            delete follow.favorites
            delete follow.follows

            return follow
            
        })
        return follows
    })
}

module.exports = listFollows

