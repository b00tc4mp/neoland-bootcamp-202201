const { models: { User } } = require("data")
const { validators: { validateId } } = require('commons')

function updateUserPassword(id, { currPassword, newPassword }) {
  validateId(id)

  return User.findById(id)
    .then(async (user) => {
      if (user.password === currPassword) {
        return User.updateOne({ _id: id }, { password: newPassword })
      } else throw new Error("Wrong credentials")
    })
    .then(user => {
      const doc = user._doc

      // sanitize
      delete doc._id
      delete doc.password
      delete doc.creditCards
      delete doc.__v

      return doc
    })
}

module.exports = updateUserPassword