const { models: { User, Action } } = require('data')
const { validators: { validateId } } = require('commons')

function toggleFavorite(userId, actionId) {

    validateId(userId, 'userId')
    validateId(actionId, 'actionId')


    return Action.findById(actionId).lean().populate('author')
        .then(action => {
            if (!action) throw Error(`action with id ${actionId} does not exist`)
            if (action.author._id.toString() !== userId && !action.public) throw Error(`action with id ${actionId} is not public`)
            return User.findById(userId)
        })
        .then(user => {
            if (!user) throw Error(`user with id ${userId} does not exist`)

            const index = user.favs.indexOf(actionId)

            if (index === -1) user.favs.push(actionId)
            else user.favs.splice(index, 1)

            return user.save()
        })
        .then(() => { })
}

module.exports = toggleFavorite