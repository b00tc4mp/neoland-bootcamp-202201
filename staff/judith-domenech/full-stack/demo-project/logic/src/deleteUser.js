const { models: { User } } = require('data')
const { validators: { validateId } } = require('commons')

function deleteUser(id) {
    validateId(id)
    return User.findById(id)
        .then(user => user.deleteOne({ _id: id}))
}

module.exports = deleteUser