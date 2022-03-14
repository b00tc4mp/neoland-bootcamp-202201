const { models: { User } } = require('data')
const { validators: { validateId } } = require('commons')

function toggleFollow(userId, followId) {
    validateId(userId, 'user id')
    validateId(followId, 'follow id')

    let user
    
    return User.findById(userId)
        .then(_user => {
            if (!_user) throw new Error(`user with id ${userId} does not exist`)
            user = _user

            return User.findById(followId)
        })
        .then(follow => {
            if (!follow) throw new Error(`follow with id ${followId} does not exist`)
            const index = user.follows.indexOf(follow.id)

            if (index === -1) user.follows.push(follow.id)
            else user.follows.splice(index, 1)

            return user.save()       
        })
        .then(user => { })
}

module.exports = toggleFollow