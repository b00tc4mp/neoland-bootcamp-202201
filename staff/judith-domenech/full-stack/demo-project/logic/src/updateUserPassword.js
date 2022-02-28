const { models: { User } } = require("data")

function updateUserPassword( id, { currPassword, newPassword }) {
  return User.findById(id)
  .then(async (user) => {
    if (user.password === currPassword) {
      return User.updateOne({ _id: id }, { password: newPassword })
    } else throw new Error("Wrong credentials")
  })
}

module.exports = updateUserPassword