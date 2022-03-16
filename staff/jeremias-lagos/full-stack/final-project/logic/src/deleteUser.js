const { models: { User, Tournament } } = require('data')
const { validators: { validateId, validatePassword } } = require('commons')


function deleteUser(userId, password) {
    validateId(userId)
    validatePassword(password)


    // First check is user exists and if password is correct
    // if (result.deletedCount === 0) throw new Error(`wrong user ${userId} or password`)

    return Tournament.deleteMany({ user: userId })
    .then(() => {
        return User.deleteOne({ _id: userId, password })
            .then(result => {
                if (result.deletedCount === 0) throw new Error(`user can't be deleted`)
            })

    
    })
}


module.exports = deleteUser

