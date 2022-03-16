const { models: { User } } = require('data')
const { validators: { validateId } } = require('commons')

function listFriends(userId) {

    validateId(userId, 'user id')

    return User.findById(userId).lean().populate('friends')
        .then(user => {
            if (!user) throw Error(`user with id ${userId} does not exist`)

            user.friends.forEach(friend => {

                friend.id = friend._id.toString()
                delete friend._id
                delete friend.__v
                delete friend.email
                delete friend.password
                delete friend.favorites
                delete friend.notifications
                delete friend.friends

                return friend
            })

            return user.friends
        })
}

module.exports = listFriends