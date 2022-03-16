const { models: { User } } = require('data')
const { validators: { validateString, validateEmail, validatePassword } } = require('commons')


function registerAdmin(name, email, password) {
    validateString(name, 'name')
    validateEmail(email)
    validatePassword(password)

    return User.create({ name, email, password, role: 'admin' })
        .then(user => {})
}

module.exports = registerAdmin