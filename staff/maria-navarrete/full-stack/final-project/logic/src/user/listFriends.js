const { models: { User } } = require('data')
const { validators: { validateId } } = require('commons')

function listFriends(userId) {

    validateId(userId, 'userId')

    return User.findById(userId).lean().populate('friends')
        .then(user => {
            if (!user) throw Error(`user with id ${userId} does not exist`)

            return user.friends.map(friend => {

                friend.id = friend._id.toString()
                delete friend._id
                delete friend.__v
                delete friend.email
                delete friend.password
                delete friend.favs
                delete friend.notifications
                delete friend.friends

                return friend
            })
        })
}

module.exports = listFriends