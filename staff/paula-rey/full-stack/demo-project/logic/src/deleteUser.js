const  { models: { User } } = require('data')

function deleteUser(id) {
    return User.deleteOne({id})
}

module.exports = deleteUser