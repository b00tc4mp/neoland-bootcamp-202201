const { models: { User } } = require('data')
const { validators: { validateId } } = require('commons')

function deleteUser(id) {
    validateId(id)
    return User.deleteOne({id})
}

module.exports = deleteUser