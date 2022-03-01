const { models: { User } } = require("data")
const { validators: { validateId, validatePassword } } = require('commons')
const { validate } = require("data/src/models/Brand")


function updateUserPassword(id, { currentPassword, newPassword }) {
    validateId(id)
    validatePassword(currentPassword)
    validatePassword(newPassword)

    return User.findById(id)
        .then(user => {
            if (user.password === currentPassword)
                user.updateOne({ _id: id }, { password: newPassword })

            else throw new Error('wrong credentials')
        })
}

module.exports = updateUserPassword
