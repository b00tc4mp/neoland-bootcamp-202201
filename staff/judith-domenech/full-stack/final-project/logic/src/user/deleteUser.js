const { models: { User, Racket } } = require('data')
const { validators: { validateId, validatePassword } } = require('commons')
const { user } = require('data/src/Schemas')


function deleteUser(userId, password) {
    validateId(userId)
    validatePassword(password)

    return user.findOne({ name: 'anonymous' })
        .then(anonymous => {
            if (!anonymous) throw new Error('user anonymous does not exist')

            else {
                Racket.updateMany({ user: userId }, { user: anonymous.id })
                    .then(() => {
                        return User.deleteOne({ _id: userId, password })
                            .then(result => {
                                if (result.deletedCount === 0) throw new Error(`wrong user ${userId} or password`)
                            })
                    })
            }
        })
}

module.exports = deleteUser