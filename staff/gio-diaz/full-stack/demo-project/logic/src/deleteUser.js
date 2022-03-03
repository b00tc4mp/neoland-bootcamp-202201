const { models: { User, Note }} = require('data');
const { validators: { validateId, validatePassword } } = require('commons')

function deleteUser(userId, password) {
    validateId(id)
    validatePassword(password)

    return Note.deleteMany({ user: userId })
    .then(() => {
        
        return User.deleteOne({ _id: userId, password })
        .then(result =>  {
            if(result.deletedCount === 0) throw new Error (`User with Id ${id} does not exist`)
            else{
            }

    })
            
    })
}

module.exports = deleteUser;