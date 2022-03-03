const { validators: { validateId, validatePassword }} = require('commons')
const { models: { User, Note } } = require('data')

function deleteUser ( userId, password ) {
    validateId(userId)
    validatePassword(password)

    return Note.deleteMany({ user: userId })
        .then(() => {
            return User.deleteOne({ _id: id, password: password })
                .then(result => {
                    if (result.deletedCount === 0) throw new Error(`user id ${userId} does not exist`)
                    else {
                        
                    }
                })

        })

}

module.exports = deleteUser