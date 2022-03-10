const { models: { User } } = require('data')
const { validators: { validateId, validatePassword } } = require('commons')


function deleteUser(userId, password) {
    validateId(userId)
    validatePassword(password)

    
            return User.deleteOne({ id: userId, password })
                .then(result => {
                    // Cuando se borre el usuario se debe borrar todos los torneos que ha creado
                    if (result.deletedCount === 0) throw new Error(`wrong user ${userId} or password`)
                    else {

                    }
                })
        }

  
module.exports = deleteUser

