const { validators: { validateId, validateString, validateBoolean, validateNumber } } = require('commons')
const { models: { Action } } = require('data')

function createAction(userId, description, public, reqTime, reqBudget) {
    validateId(userId, 'userId')
    validateString(description, 'description')
    validateBoolean(public, 'public')
    validateNumber(reqTime, 'reqTime')
    validateNumber(reqBudget, 'reqBudget')

    // return Action.findOne({description, public: true})
    // .then(action=>{
    //     if(action) throw new Error('a public action with this description already exists')

    return Action.create({ author: userId, description, public, reqTime, reqBudget })
        .then(action => action.id)
}

module.exports = createAction

