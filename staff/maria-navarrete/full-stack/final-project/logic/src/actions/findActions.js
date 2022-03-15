const { models: { Action, User } } = require('data')
const { helpers: { sanitizeAction }, validators: { validateString, validateNumber } } = require('commons')

function findActions(userId, _filters = {}) {

    const { query, reqTime, reqBudget } = _filters
    let filters
    if (query) validateString(query)
    if (reqTime) validateNumber(reqTime, 'reqTime')
    if (reqBudget) validateNumber(reqBudget, 'reqBudget')


    return User.findById(userId).lean()
        .then(user => {
            if (!user) throw Error(`user with id ${userId} not found`)

            if (query) {
                const queryReg = new RegExp(`${query}`, "i")

                if ((reqTime || reqTime === 0) && (reqBudget || reqBudget === 0)) {

                    filters = { description: queryReg, reqTime, reqBudget, public: true }
                }
                else if (reqTime || reqTime === 0) {
                    filters = { description: queryReg, reqTime, public: true }
                }
                else if (reqBudget || reqBudget === 0) {
                    filters = { description: queryReg, reqBudget, public: true }
                }
                else {
                    filters = { description: queryReg, public: true }
                }
            }
            else if (reqTime || reqTime === 0) {

                if (reqBudget || reqBudget === 0) {
                    filters = { reqTime, reqBudget, public: true }
                }
                else {
                    filters = { reqTime, public: true }
                }
            }
            else if (reqBudget || reqBudget === 0) {
                filters = { reqBudget, public: true }
            }
            else {
                filters = { public: true }
            }

            return Action.find(filters).lean().populate('author')
        })
        .then(actions => actions.map(action => sanitizeAction(action)))
}

module.exports = findActions

