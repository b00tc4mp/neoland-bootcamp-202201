const { models: { Action } } = require('data')
const { helpers: { sanitizeAction }, validators: { validateString, validateNumber } } = require('commons')

function findActions(_filters = {}) {

    const { query, reqTime, reqBudget } = _filters

    let filters

    if (query) {

        validateString(query)

        const queryReg = new RegExp(`${query}`, "i")

        if ((reqTime || reqTime === 0) && (reqBudget || reqBudget === 0)) {
            validateNumber(reqTime, 'reqTime')
            validateNumber(reqBudget, 'reqBudget')

            filters = { description: queryReg, reqTime, reqBudget, public: true }
        }
        if (reqTime || reqTime === 0) {
            validateNumber(reqTime, 'reqTime')
            filters = { description: queryReg, reqTime, public: true }
        }
        if (reqBudget || reqBudget === 0) {
            validateNumber(reqBudget, 'reqBudget')
            filters = { description: queryReg, reqBudget, public: true }
        }
        else {
            filters = { description: queryReg, public: true }
        }
    }
    else if (reqTime || reqTime === 0) {
        validateNumber(reqTime, 'reqTime')
        if (reqBudget || reqBudget === 0) {
            validateNumber(reqBudget, 'reqBudget')
            filters = { reqTime, reqBudget, public: true }
        }
        else {
            filters = { reqTime, public: true }
        }
    }

    else if (reqBudget || reqBudget === 0) {
        validateNumber(reqBudget, 'reqBudget')
        filters = { reqBudget, public: true }
    }
    else {
        filters = { public: true }
    }

    return Action.find(filters).populate('author')
        .then(actions => {
            const docs = actions.map(action => {
                return sanitizeAction(action)
            })
            return docs
        })
}

module.exports = findActions

