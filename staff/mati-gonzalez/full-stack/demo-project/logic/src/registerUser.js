const { models: { User } } = require('data')
const { validators: { validateString, validateEmail, validatePassword } } = require('commons')
const { registerUser } = require('.')

function registerUsr(name, email, password) {
    validateString(name, 'name')
    validateEmail(email)
    validatePassword(password)

    return User.create({ name, email, password })
        .then(user => { })
}

module.exports = registerUser