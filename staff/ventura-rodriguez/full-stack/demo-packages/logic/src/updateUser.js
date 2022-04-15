const {models: { User }} = require("data");
const { user } = require("data/src/schemas");

function updateUser(id, { name: _name, email: _email }) {
  return User.findById(id).then((user) => {
    user.name = _name || user.name;
    user.email = _email || user.email;

    return user.save();
  })
}

module.exports = updateUser;