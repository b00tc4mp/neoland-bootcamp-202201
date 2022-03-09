const { validators: { validateId, validateString, validateBoolean, validateNumber } } = require('commons')
const { models: { Action } } = require('data')

function createAction (userId, description, public, reqTime, reqBudget) {
    validateId(userId, 'userId')
    validateString(description, 'description')
    validateBoolean(public, 'public')
    validateNumber(reqTime, 'reqTime')
    validateNumber(reqBudget, 'reqBudget')

    return Action.create({ author: userId, description, public, reqTime, reqBudget })
        .then(action => { })
}

module.exports = createAction 

