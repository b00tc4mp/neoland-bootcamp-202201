const { models: { Schedule, User } } = require('data')
const { validators: { validateId } } = require('commons')

function retrieveSchedule(userId, scheduleId) {

    validateId(userId, 'userId')
    validateId(scheduleId, 'scheduleId')

    return User.findById(userId).lean()
        .then(user => {
            if (!user) throw Error(`user with id ${userId} not found`)
            return Schedule.findOne({ _id: scheduleId, user: userId }).lean().populate('action')
        })
        .then(schedule => {

            if (!schedule) throw new Error(`schedule with id ${scheduleId} for user id ${userId} does not exist`)

            schedule.id = schedule._id.toString()
            delete schedule._id
            delete schedule.__v
            schedule.user = schedule.user._id.toString()
            schedule.actionId = schedule.action._id.toString()
            schedule.actionDesc = schedule.action.description
            schedule.actionReqTime = schedule.action.reqTime
            schedule.actionReqBudget = schedule.action.reqBudget
            delete schedule.action

            return schedule
        })
}

module.exports = retrieveSchedule