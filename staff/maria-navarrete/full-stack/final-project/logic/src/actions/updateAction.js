const { models: { Action, Schedule } } = require("data")
const { validators: { validateId, validateString, validateBoolean, validateNumber } } = require('commons')


function updateAction(userId, actionId, description, public, reqTime, reqBudget) {
    validateId(userId, 'userId')
    validateId(actionId, 'actionId')
    validateString(description, 'description')
    validateBoolean(public, 'public')
    validateNumber(reqTime, 'reqTime')
    validateNumber(reqBudget, 'reqBudget')

    return Schedule.find({ action: actionId })
        .then(schedules => {
            const index = schedules.findIndex(schedule => schedule.user !== userId)
            if (index !== -1) throw new Error(`action with id ${actionId} is scheduled by other users`)

            return Action.updateOne({ _id: actionId, user: userId }, { description, public, reqTime, reqBudget })
                .then(result => {
                    if (result.matchedCount === 0) throw new Error(`note with id ${noteId} and userId ${userId} does not exist`)
                })
        })
}

module.exports = updateAction