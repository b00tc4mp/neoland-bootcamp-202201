const { models: { User } } = require('data')
const { validators: { validateId } } = require('commons')

/* function updateUser(id, {name, email}) {
        return User.findById(id)
                .then(user => user.updateOne({ name, email }),)
} */

function updateUser(id, { name, email }) {
        validateId(id)

        return User.updateOne({ _id: id }, { name, email })
                .then(user => {
                        const doc = user_doc

                        // sanitize
                        delete doc._id
                        delete doc.password
                        delete doc.creditCards
                        delete doc.__v

                        return doc
                })
}

module.exports = updateUser