const { validators: { validateId, validatePassword }} = require('commons')
const { models: { User }} = require('data')

function deleteUser(id, password) {
    validateId(id)
    validatePassword
    
    return User.deleteOne({ _id: id, password })
        .then(result => {
            if (result.deletedCount === 0) throw new Error(`node cannot delete ${userId}`)
        })
}

module.exports = deleteUser