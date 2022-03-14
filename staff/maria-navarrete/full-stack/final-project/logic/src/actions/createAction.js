const { validators: { validateId, validateString, validateBoolean, validateNumber } } = require('commons')
const { models: { Action, User } } = require('data')

function createAction(userId, description, public = "false", reqTime, reqBudget) {

    validateId(userId, 'userId')
    validateString(description, 'description')
    validateBoolean(public, 'public')
    validateNumber(reqTime, 'reqTime')
    validateNumber(reqBudget, 'reqBudget')

    return User.findById(userId).lean()
        .then(user => {
            if (!user) throw Error(`user with id ${userId} not found`)
            return Action.create({ author: userId, description, public, reqTime, reqBudget })
        })
        .then(({ id }) => id)

}

module.exports = createAction


    // return Action.findOne({description, public: true})
    // .then(action=>{
    //     if(action) throw new Error('a public action with this description already exists')
