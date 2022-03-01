const { models: { User } } = require("data")
const {validators: {validateId, validateString, validateEmail}} = require('commons')


function updateUser(id, { name, email }) {
    validateId(id)
    validateString(name, 'name')
    validateEmail(email)
    
    return User.updateOne({ _id: id }, { name, email })
}

module.exports = updateUser