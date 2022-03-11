const { models: { Schedule } } = require('data')
const { validators: { validateId } } = require('commons')

function completeSchedule(userId, scheduleId) {
    validateId(userId, 'userId')
    validateId(scheduleId, 'scheduleId')


    return Schedule.find({ _id: scheduleId, user: userId })
        .then(schedule => {
            if (!schedule) throw new Error(`schedule with id ${scheduleId} and user ${userId} does not exist`)

            schedule.completed.push(new Date())
            return schedule.save()
        })
        .then(() => { })
}

module.exports = completeSchedule