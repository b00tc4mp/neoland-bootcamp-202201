const { models: { User, Product } } = require('data')
const { validators: { validateId, validatePassword } } = require('commons')


function deleteUser(userId, password) {
    validateId(userId)
    validatePassword(password)


    return Product.deleteMany({ user: userId })
        .then(() => {
            return User.deleteOne({ _id: userId, password })
                .then(result => {
                    if (result.deletedCount === 0) throw new Error(`wrong user ${userId} or password`)
                })
    })
}

module.exports = deleteUser