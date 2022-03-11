const { models: { User, Comment } } = require('data')
const { validators: { validateId, validatePassword } } = require('commons')



function deleteUser(userId, password) {
    validateId(userId)
    validatePassword(password)

    return Comment.deleteMany({ user: userId })
        .then(() => {
            return User.deleteOne({ _id: userId, password })
                .then(result => {
                    if (result.deletedCount === 0) throw new Error(`wrong user ${userId} or password`)
                    else {
                        return
                    }
                })
        })
}

module.exports = deleteUser
