const { models: { User } } = require('data')
const { validators: { validateString } } = require('commons')

function findUsers(userId, query) {

    validateString(query, 'query')

    return User.findById(userId).lean()
        .then(user => {
            if (!user) throw Error(`user with id ${userId} not found`)
            return User.find({ username: { $regex: `${query}` } }).lean()
        })
        .then(users => users.map(user => {

            user.id = user._id.toString()
            delete user._id
            delete user.__v
            delete user.email
            delete user.password
            delete user.friends
            delete user.notifications
            delete user.favs

            return user
        }))
}

module.exports = findUsers