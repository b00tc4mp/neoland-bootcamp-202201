const { models: { User, Action, Schedule } } = require("data")
const { validators: { validateId, validateString, validateBoolean, validateNumber } } = require('commons')


function updateAction(userId, actionId, description, public, reqTime, reqBudget) {
    validateId(userId, 'userId')
    validateId(actionId, 'actionId')
    validateString(description, 'description')
    validateBoolean(public, 'public')
    validateNumber(reqTime, 'reqTime')
    validateNumber(reqBudget, 'reqBudget')


    let anonymous

    return User.findOne({ username: 'anonymous' })
        .then(_anonymous => {
            if (!_anonymous) throw new Error(`user anonymous doesn't exist`)
            anonymous = _anonymous
            return Schedule.find({ action: actionId })
        })
        .then(schedules => {
            if (schedules.length === 0) {
                return Action.updateOne({ _id: actionId, user: userId }, { description, public, reqTime, reqBudget })
                    .then(result => {
                        if (result.matchedCount === 0) throw new Error(`action with id ${actionId} and userId ${userId} does not exist`)
                    })
            }
            else {
                return Action.updateOne({ _id: actionId, user: userId }, { author: anonymous.id })
                    .then(result => {
                        if (result.matchedCount === 0) throw new Error(`action with id ${actionId} and userId ${userId} does not exist`)
                        return Action.create({ author: userId, description, public, reqTime, reqBudget })
                            .then(action => { })
                    })
            }
        })
}

module.exports = updateAction