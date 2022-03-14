const { models: { User } } = require('data')
const { validators: { validateId } } = require('commons')

function toggleFriend(userId, friendId) {

    validateId(userId, 'userId')
    validateId(friendId, 'friendId')

    return User.findById(friendId).lean()
        .then(friend => {
            if (!friend) throw Error(`friend with id ${userId} does not exist`)
            return User.findById(userId)
        })
        .then(user => {
            if (!user) throw Error(`user with id ${userId} does not exist`)

            const index = user.friends.indexOf(friendId)

            if (index === -1) user.friends.push(friendId)
            else user.friends.splice(index, 1)

            return user.save()
        })
        .then(() => { })

}

module.exports = toggleFriend