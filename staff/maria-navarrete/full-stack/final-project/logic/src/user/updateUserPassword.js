const { models: { User } } = require("data")
const { validators: { validateId, validatePassword } } = require('commons')

function updateUserPassword(userId, currPassword, newPassword) {
    validateId(userId, 'userId')
    validatePassword(currPassword, 'currPassword')
    validatePassword(newPassword, 'newPassword')

    return User.findById(userId)
        .then(user => {
            if(!user) throw new Error(`user with id ${userId} does not exist`)
            if (user.password === currPassword)
                return User.updateOne({ _id: userId }, { password: newPassword })
                    .then(() => {})
            else throw new Error('wrong credentials')
        })
}

module.exports = updateUserPassword