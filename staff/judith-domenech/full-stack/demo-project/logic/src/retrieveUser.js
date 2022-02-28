const { models: { User } } = require('data')
const {validators : {vali}}

function deleteUser(id) {
    return User.findById(id)
        .then(user => user.deleteOne({ _id: id}))

}

module.exports = deleteUser