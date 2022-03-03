const { validators: { validateId, validatePassword,  }} = require('commons')
const { models: { User } } = require('data')

function deleteUser ( id, password ) {
    validateId(id)
    validatePassword(password)

    return User.deleteOne({ _id: id, password: password })
        .then(result => {
            if (result.deletedCount === 0) throw new Error(`user id ${userId} does not exist`)
        })
}

module.exports = deleteUser
