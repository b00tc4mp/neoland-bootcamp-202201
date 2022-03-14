const { models: { Schedule, User } } = require('data')
const { validators: { validateId } } = require('commons')

function listSchedules(userId) {
    validateId(userId, 'userId')

    return User.findById(userId).lean()
        .then(user => {
            if (!user) throw Error(`user with id ${userId} not found`)
            return Schedule.find({ user: userId }).lean().populate('action')
        })
        .then(schedules => {
            if (!schedules) throw new Error(`no schedules found for user with id ${userId}`)

            return schedules.map(schedule => {

                schedule.id = schedule._id.toString()
                delete schedule._id
                delete schedule.__v
                schedule.actionId = schedule.action._id.toString()
                schedule.actionDesc = schedule.action.description
                schedule.actionReqTime = schedule.action.reqTime
                schedule.actionReqBudget = schedule.action.reqBudget
                delete schedule.action

                return schedule
            })
        })

}

module.exports = listSchedules