const { models: { User } } = require('data')

function deleteUser(id) {
    return User.findById(id)
        .then(user => user.deleteOne({ _id: id}))
}

module.exports = deleteUser