const { models: { User, Location, Comment } } = require('data')
const { validators: { validateId, validatePassword } } = require('commons')


function deleteUser(userId, password) {
        validateId(userId)
        validatePassword(password)
    
        return User.findOne({ name: 'anonymous' })
        .then(anonymous => {
            if (!anonymous) throw new Error('user anonymous does not exist')
            return Location.updateMany({ user: userId }, { user: anonymous.id })
        })
        .then(() => User.findOne({_id: userId, password}))
        .then((user) => {
            if (!user) throw new Error('user anonymous does not exist')
            return Comment.deleteMany({user: userId})
        })   
        .then(() => User.deleteOne({ _id: userId, password }))
        .then(result => {
                if (result.deletedCount === 0) throw new Error(`wrong user ${userId} or password`)
        })
}

module.exports = deleteUser







