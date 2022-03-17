const { models: { User } } = require('data')
const { validators: { validateString, validateEmail, validatePassword } } = require('commons')

function registerUser(name, email, password) {
    validateString(name, 'name')
    validateEmail(email)
    validatePassword(password)

    const role = 'user'
    return User.create({ name, email, password, role })
        .then(user => {})
}

module.exports = registerUser