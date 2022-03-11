const { validators: { validateId, validateString, validateNumber, validateDate } } = require('commons')
const { models: { Schedule } } = require('data')

function createSchedule(userId, actionId, date, repeat) {
    validateId(userId, 'userId')
    validateId(actionId, 'actionId')
    validateDate(date)
    validateString(repeat)

    return Schedule.create({ user: userId, action: actionId, date, repeat })
        .then(action => action.id)
}

module.exports = createSchedule
