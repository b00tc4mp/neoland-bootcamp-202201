const { models: { User } } = require("data")
const { validators: { validateId, validateString, validateEmail } } = require('commons')


function updateUser(userId, {name, email}) {
    validateId(userId, 'userId')
    validateString(name, 'name')
    validateEmail(email)

    return User.updateOne({ _id: userId }, { name, email })
        .then(result => {
            if (result.modifiedCount === 0) throw new Error(`user with id ${userId} does not exist`)
        })
}

module.exports = updateUser

// User.updateOne({ _id: id }, { name, email})
//     .then(user => {
//         const doc = user._doc

//         delete doc._id
//         delete doc.password
//         delete doc.creditCards
//         delete doc.__v

//         return doc
//     })