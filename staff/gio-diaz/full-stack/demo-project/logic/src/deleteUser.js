const { models: { User }} = require('data');
const { validators: { validateId, validatePassword } } = require('commons')

function deleteUser(id, password) {
    validateId(id)
    validatePassword
    return User.deleteOne({ _id: id, password })
    .then(result =>  {
        if(result.deletedCount === 0) throw new Error (`User with Id ${id} does not exist`)
    })
}

module.exports = deleteUser;