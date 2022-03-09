const { models: { User } } = require('data')
const { validators: { validateId } } = require('commons')

function listFriends(userId) {
    validateId(userId, 'userId')
    return User.findById(userId).populate('friends')
        .then(user => {

            if(!user) throw new Error(`user with id ${userId} does not exist`)

            const docs = user.friends.map(friend => {
                const doc = friend._doc

                doc.id = doc._id.toString()
                delete doc._id
                delete doc.__v
                delete doc.email
                delete doc.password
                delete doc.favs
                delete doc.notifications
                delete doc.friends

                return doc
            })

            return docs
        })
        
}

module.exports = listFriends