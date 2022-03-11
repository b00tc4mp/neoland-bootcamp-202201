const { models: { User, Action, Schedule } } = require('data')
const { validators: { validateId } } = require('commons')

function deleteAction(userId, actionId) {
    validateId(userId, 'userId')
    validateId(actionId, 'actionId')

    let anonymous

    return User.findOne({ username: 'anonymous' })
        .then(_anonymous => {
            if (!_anonymous) throw new Error(`user anonymous doesn't exist`)
            anonymous = _anonymous
            return Schedule.find({ action: actionId })
        })
        .then(schedules => {
            if (schedules.length > 0) {
                return Action.updateOne({ _id: actionId, user: userId }, { author: anonymous.id })
                    .then(result => {
                        if (result.matchedCount === 0) throw new Error(`action with id ${actionId} and userId ${userId} does not exist`)
                    })
            }
            else {
                return Action.deleteOne({ _id: actionId, user: userId })
                    .then(result => {
                        if (result.deletedCount === 0) throw new Error(`action with id ${actionId} and userId ${userId} does not exist`)
                    })
            }
        })
}

module.exports = deleteAction