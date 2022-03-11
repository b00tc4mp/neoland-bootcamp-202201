const { models: { Schedule } } = require('data')
const { validators: { validateId } } = require('commons')

function retrieveSchedule(userId, scheduleId) {
    validateId(userId, 'userId')
    validateId(scheduleId, 'scheduleId')

    return Schedule.find({ _id: scheduleId, user: userId }).populate('action')
        .then(schedule => {

            if (!schedule) throw new Error(`no schedule found with id ${scheduleId} and user ${userId}`)

            const doc = schedule._doc

            doc.id = doc._id.toString()
            delete doc._id
            delete doc.__v
            doc.actionId = doc.action.id
            doc.actionDesc = doc.action.description
            doc.actionReqTime = doc.action.reqTime
            doc.actionReqBudget = doc.action.reqBudget
            delete doc.action

            return doc
        })
}

module.exports = retrieveSchedule