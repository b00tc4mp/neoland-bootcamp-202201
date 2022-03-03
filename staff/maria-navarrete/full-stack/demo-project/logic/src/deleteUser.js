const { models: { User } } = require('data')
const { validators: { validateId, validatePassword } } = require('commons')


function deleteUser(id, password) {
    validateId(id)
    validatePassword(password)
    return User.deleteOne({ id, password })
        .then(result => {
            if (result.deletedCount === 0) throw new Error(`wrong user ${id} or password`)
        })
}

module.exports = deleteUser