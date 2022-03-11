const { models: { User } } = require('data')
const { validators: { validateId, validatePassword } } = require('commons')


function deleteUser(userId, password) {
    validateId(userId)
    validatePassword(password)

    return User.findById(userId)
        .then(user => {
            if (!user) throw new Error(`User with id ${userId} does not exist`)

    return User.deleteOne({ id: userId, password, recipe, comment })
        .then(result => {
            if (result.deletedCount === 0) throw new Error(`wrong user ${userId} or password`)
        })
}

module.exports = deleteUser