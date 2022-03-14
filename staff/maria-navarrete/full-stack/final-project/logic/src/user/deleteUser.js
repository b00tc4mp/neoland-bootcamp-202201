const { models: { User, Action, Schedule } } = require('data')
const { validators: { validateId, validatePassword } } = require('commons')


function deleteUser(userId, password) {

    validateId(userId)
    validatePassword(password)

    let anonymous

    return User.findById(userId).lean()
        .then(user => {
            if (!user) throw Error(`user with id ${userId} not found`)
            return User.findOne({ username: 'anonymous' }).lean()
        })
        .then(_anonymous => {
            if (!_anonymous) throw Error(`user anonymous doesn't exist`)
            anonymous = _anonymous

            return Schedule.deleteMany({ user: userId })
        })
        .then(() => Schedule.find().lean().populate('action'))
        .then(schedules => {
            const userAsAuthorScheduledActions = schedules.filter(schedule => schedule.action.author._id === userId).map(schedule => schedule.action._id)
            //aqui tengo las acciones que deben pasar a anonymous

            return Action.updateMany({ _id: { $in: userAsAuthorScheduledActions } }, { author: anonymous })
        })
        .then(() => Action.deleteMany({ author: userId }))
        .then(() => User.deleteOne({ _id: userId, password }))
        .then(result => {
            if (result.deletedCount === 0) throw Error(`wrong user ${userId} or password`)
        })
}

module.exports = deleteUser