const { models: { User } } = require('data')
const { validators: { validateId, validatePassword } } = require('commons')

function updateUserPassword({ userId, currPassword, newPassword }) {
    validateId(userId, 'user id')
    validatePassword(currPassword, 'currPassword')
    validatePassword(newPassword, 'newPassword')

    return User.findById(userId)
        .then(user => {
            if (user.password === currPassword)
                return User.updateOne({ _id: userId }, { password: newPassword })
                    .then(() => { })   //return undefined
            else throw new Error('wrong credentials')
        })
}

module.exports = updateUserPassword