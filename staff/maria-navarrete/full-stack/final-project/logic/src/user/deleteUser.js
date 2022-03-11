const { models: { User, Action, Schedule } } = require('data')
const { validators: { validateId, validatePassword } } = require('commons')

function deleteUser(userId, password) {
    validateId(userId)
    validatePassword(password)

    return User.findOne({ username: 'anonymous' })
        .then(anonymous => {
            if (!anonymous) throw new Error(`user anonymous doesn't exist`)
            return Action.updateMany({ author: userId }, { author: anonymous.id })
        })
        .then(() => User.findOne({ _id: userId, password }))
        .then(user => {
            if (!user) throw new Error(`wrong user ${userId} or password`)
            return Schedule.deleteMany({ user: userId })
        })
        .then(() => User.deleteOne({ _id: userId, password }))
        .then(result => {
            if (result.deletedCount === 0) throw new Error(`wrong user ${userId} or password`)
        })

}

module.exports = deleteUser