const { models: { Action } } = require('data')
const { validators: { validateId } } = require('commons')

function retrieveAction(userId, actionId) {
    validateId(userId, 'userId')
    validateId(actionId, 'actionId')

    return Action.findById(actionId).populate('author')
        .then(action => {

            if(!action) throw new Error(`action with id ${actionId} does not exist`)

            if(action.author.id === userId || action.public){
                const doc = action._doc

                doc.id = doc._id.toString()
    
                delete doc._id
                delete doc.__v

                doc.authorId = doc.author.id
                doc.AuthorUsername = doc.author.username

                delete doc.author
    
                return doc
            }
            else throw new Error (`action with id ${actionId} is not public`)
            
        })
}

module.exports = retrieveAction