const { models: { User, Note } } = require('data')
const { validators: { validateId, validatePassword } } = require('commons')


function deleteUser(userId, password) {
    validateId(userId)
    validatePassword(password)

    return Note.deleteMany({ user: userId })
        .then(() => {
            return User.deleteOne({ id: userId, password })
                .then(result => {
                    if (result.deletedCount === 0) throw new Error(`wrong user ${userId} or password`)
                    else {

                    }
                })
        })

    }

module.exports = deleteUser