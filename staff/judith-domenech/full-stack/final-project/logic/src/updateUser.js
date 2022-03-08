const { models: { User } } = require('data')
const { validators: { validateId, validateEmail, validateString } } = require('commons')

/* function updateUser(id, {name, email}) {
        return User.findById(id)
                .then(user => user.updateOne({ name, email }),)
} */

/* function updateUser(id, name, email) {
        validateId(id)
        validateString(name, 'name')
        validateEmail(email)
    
        return User.updateOne({ _id: id }, { name, email })
            .then( result => {
                if (result.modifiedCount === 0) throw new Error(`user with id ${id} does not exist`)
            })
    } */


function updateUser(userId, { name, email }) {
        validateId(userId, 'userId')
        validateString(name, 'name')
        validateEmail(email)

        return User.updateOne({ _id: userId }, { name, email })
                .then(result => {
                        if (result.matchedCount === 0) throw new Error(`user with id ${userId} does not exist`)
                })
}

module.exports = updateUser