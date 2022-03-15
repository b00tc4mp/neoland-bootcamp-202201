const { models: { User } } = require('data')
const { validators: { validateId } } = require('commons')

function retrieveUser(userId) {
    validateId(userId)

    return User.findById(userId).lean().select('name email') //selecciona solo lo que quiero que traiga y asi me evito hacer el delete
        .then((user) => {

            if (!user) throw new Error(`user with id ${userId} does not exist`)
            
            delete user._id
            delete user.__v

            return user
        })
}


module.exports = retrieveUser