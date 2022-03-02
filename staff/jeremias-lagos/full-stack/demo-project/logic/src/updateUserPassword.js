const { models: { User } } = require('data')
const { validators: { validateId, validatePassword } } = require('commons')

function updateUserPassword(id, { password }) {
    validateId(id);
    validatePassword(password);

    return User.findById(id)
    .then((user) => {
        user.password = password || user.password;

        return user.save();
    })
}

module.exports = updateUserPassword