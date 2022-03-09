const { models: { Action, Schedule } } = require('data')
const { validators: { validateId } } = require('commons')


function deleteAction(userId, actionId) {
    validateId(userId, 'user id')
    validateId(actionId, 'Action id')

    let anonymous


    return User.findOne({ username: 'anonymous' })
        .then(_anonymous => {
            if (!_anonymous) throw new Error(`user anonymous doesn't exist`)
            anonymous = _anonymous
            return Schedule.find({ action: actionId })
        })
        .then(schedules => {
            const index = schedules.findIndex(schedule => schedule.user !== userId)
            if (index !== -1) {
                return Action.updateOne({ _id: actionId, user: userId }, { author: anonymous.id })
                    .then(result => {
                        if (result.matchedCount === 0) throw new Error(`note with id ${noteId} and userId ${userId} does not exist`)
                    })
            }
            else {
                return Action.deleteOne({ _id: ActionId, user: userId })
                    .then(result => {
                        if (result.deletedCount === 0) throw new Error(`Action with id ${noteId} and user id ${userId} does not exist`)
                    })
        }
        })
}

module.exports = deleteAction