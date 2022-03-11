const { models: { Schedule } } = require("data")
const { validators: { validateId, validateString, validateDate } } = require('commons')

function updateSchedule(userId, scheduleId, date, repeat) {
    validateId(userId, 'userId')
    validateId(scheduleId, 'scheduleId')
    validateDate(date, 'date')
    validateString(repeat, 'repeat')

    return Schedule.updateOne({ _id: scheduleId, user: userId }, { date, repeat })
        .then(result => {
            if (result.matchedCount === 0) throw new Error(`schedule with id ${scheduleId} for user id ${userId} does not exist`)
        })
}

module.exports = updateSchedule