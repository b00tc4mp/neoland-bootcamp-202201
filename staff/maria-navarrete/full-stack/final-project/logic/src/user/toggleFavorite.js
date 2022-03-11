const { models: { User, Action } } = require('data')
const { validators: { validateId } } = require('commons')

function toggleFavorite(userId, actionId) {
    validateId(userId, 'userId')
    validateId(actionId, 'actionId')

    let action

    return Action.findById(actionId)
        .then(_action => {
            if (!_action) throw new Error(`action with id ${actionId} does not exist`)
            action = _action
            return User.findById(userId)
        })
        .then(user => {
            if (!user) throw new Error(`user with id ${userId} does not exist`)
            
            const index = user.favs.indexOf(action.id)

            if (index === -1) user.favs.push(action.id)
            else user.favs.splice(index, 1) 

            return user.save()
        })
        .then(() => { })
}

module.exports = toggleFavorite