const { models: { User } } = require('data')
const { validators: { validateId } } = require('commons')

function toggleFriend(userId, friendId) {
    validateId(userId, 'userId')
    validateId(friendId, 'friendId')

    let user

    return User.findById(userId)
        .then(_user => {
            if (!_user) throw new Error(`user with id ${userId} does not exist`)
            user = _user
            return User.findById(friendId)
        })
        .then(friend => {
            if (!friend) throw new Error(`friend with id ${userId} does not exist`)

            const index = user.friends.indexOf(friend.id)

            if (index === -1) user.friends.push(friend.id)
            else user.friends.splice(index, 1)

            return user.save()
        })
        .then(() => { })

}

module.exports = toggleFriend