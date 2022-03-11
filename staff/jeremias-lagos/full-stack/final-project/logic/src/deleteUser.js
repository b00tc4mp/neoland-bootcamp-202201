const { models: { User, Tournament } } = require('data')
const { validators: { validateId, validatePassword } } = require('commons')


function deleteUser(userId, password) {
    validateId(userId)
    validatePassword(password)

    // TODO delete all tournaments created by user first (HINT deleteMany with a filter)

    return Tournament.deleteMany({ user: userId })
    .then(() => {
        return User.deleteOne({ _id: userId, password })
            .then(result => {
                if (result.deletedCount === 0) throw new Error(`wrong user ${userId} or password`)
            })

    
    })
}


module.exports = deleteUser

