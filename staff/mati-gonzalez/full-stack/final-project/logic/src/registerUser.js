const { models: { User } } = require('data')
const { validators: { validateString, validateEmail, validatePassword } } = require('commons')

function registerUser(username, email, password) {
    validateString(username, 'username')
    validateEmail(email)
    validatePassword(password)

    return User.create({ username, email, password })
        .then(user => {})
}

module.exports = registerUser