const { models: { User } } = require('data')
const { validators: { validateId, validatePassword } } = require('commons')
const { Note } = require('data/src/models')


function deleteUser(userId, password) {
    validateId(userId)
    validatePassword(password)

    return Note.deleteMany({ id: userId })
        .then(() => {
            return User.deleteOne({ id: userId, password })
                .then(result => {
                    if (result.deletedCount === 0) throw new Error(`wrong user ${id} or password`)
                    else {
                        return
                    }
                })
        })
}

module.exports = deleteUser