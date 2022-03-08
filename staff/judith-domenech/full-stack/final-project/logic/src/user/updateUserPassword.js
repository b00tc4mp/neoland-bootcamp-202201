const { models: { User } } = require("data")
const { validators: { validateId, validatePassword } } = require('commons')

function updateUserPassword(userId, { currPassword, newPassword }) {
  validateId(userId)
  validatePassword(currPassword)
  validatePassword(newPassword)

  return User.findById(userId)
    .then((user) => {
      if(!user) throw new Error(`user with id ${userId} does not exist`)
      if (user.password ===  currPassword) {
        return User.updateOne({ _id: userId}, {password: newPassword })
        .then(() => {})
      } else throw new Error("Wrong credentials")
    })
   
}

module.exports = updateUserPassword