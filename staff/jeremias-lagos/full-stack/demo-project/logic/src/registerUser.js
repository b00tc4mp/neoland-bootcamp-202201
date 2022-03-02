const { models: { User } } = require('data')
const { validators: { validateString, validateEmial, validatePassword } } = require('commons')

function registerUser(name, email, password) {
    validateString(name, 'name')
    validateEmial(email)
    validatePassword(password)

    return User.create({ name, email, password })
        .then(user => { })
}

module.exports = registerUser