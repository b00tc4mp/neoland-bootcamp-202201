const { models: { User } } = require('data')

function updateUserPassword(id, {password}) {
    return User.findById(id)
        .then(user => user.updateOne({ password }))
}

//??????????????

module.exports = updateUserPassword