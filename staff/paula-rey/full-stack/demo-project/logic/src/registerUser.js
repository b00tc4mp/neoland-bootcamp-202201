const { models: { User } } = require('data')

function registerUser(name, email, password) {
    // TODO validate input fields

    return User.create({ name, email, password })
        .then(user => {})
}

module.exports = registerUser