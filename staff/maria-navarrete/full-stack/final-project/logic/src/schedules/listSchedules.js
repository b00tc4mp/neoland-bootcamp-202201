const { models: { Schedule } } = require('data')
const { validators: { validateId } } = require('commons')

function listSchedules(userId) {
    validateId(userId, 'userId')

    return Schedule.find({ user: userId }).populate('action')
        .then(schedules => {
            if (!schedules) throw new Error(`no schedules found for user with id ${userId}`)

            const docs = schedules.map(schedule => {
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

            return docs
        })

}

module.exports = listSchedules