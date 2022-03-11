const { models: { User } } = require("data")
const { validators: { validateId, validatePassword } } = require('commons')

function updateUserPassword(userId, currPassword, newPassword) {
    validateId(userId, 'userId')
    validatePassword(currPassword)
    validatePassword(newPassword)

    return User.findById(userId)
        .then(user => {
            if (user.password === currPassword)
                return User.updateOne({ _id: userId, password: newPassword })
                    .then(result => {
                        if (result.modifiedCount === 0) throw new Error(`user with id ${userId} does not exist`)
                    })
            else throw new Error('wrong credentials')
        })
}

module.exports = updateUserPassword

