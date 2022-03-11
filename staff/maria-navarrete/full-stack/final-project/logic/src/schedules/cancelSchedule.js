const { models: { Schedule } } = require('data')
const { validators: { validateId } } = require('commons')

function cancelSchedule(userId, scheduleId) {
    validateId(userId, 'userId')
    validateId(scheduleId, 'scheduleId')

    return Schedule.UpdateOne({ _id: scheduleId, user: userId }, { repeat: 'none' })
        .then(schedule => {
            if (!schedule) throw new Error(`schedule with id ${scheduleId} for user id ${userId} does not exist`)
        })
}

module.exports = cancelSchedule