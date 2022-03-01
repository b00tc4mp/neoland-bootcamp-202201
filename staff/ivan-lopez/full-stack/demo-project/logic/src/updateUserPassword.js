const { models: { User } } = require('data')
const { validators: { validateId, validatePassword } } = require('commons')

function updateUserPassword(id, { password }) {
    validateId(id);
    validatePassword(password);

    return User.findById(id)
    .then((user) => {
        user.password = password || user.password; 
    
//  .then(user => user.updateOne({ name, email })) Esto es lo mismo que linea 5-6-7

        return user.save();
    })
}

module.exports = updateUserPassword