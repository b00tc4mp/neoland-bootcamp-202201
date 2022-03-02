const { models: { User } } = require('data')

function retrieveUsers() {
    return User.find({})
}

module.exports = retrieveUsers