const { models: { User } } = require("data")
const { validators: { validateId, validateString, validateEmail } } = require('commons')


function updateUser(userId, username, email) {
    validateId(userId, 'userId')
    validateString(username, 'username')
    validateEmail(email)

    return User.updateOne({ _id: userId }, { username, email })
        .then(result => {
            if (result.matchedCount === 0) throw new Error(`user with id ${userId} does not exist`)
        })
}

module.exports = updateUser