const { models: { User } } = require('data')

function retrieveUser(id) {
    return User.findById(id)
        .then(user => {
            if (!id) throw new Error('id invalid')

            return user
        })

}

module.exports = retrieveUser