const { models: { User } } = require('data')
const { validators: { validateId, validatePassword } }  = require('commons')

function updateUserPassword({ id, currPassword, newPassword }) {
    validateId(id)
    validatePassword(currPassword)
    validatePassword(newPassword)

    return User.findById(id)
        .then(user => {
            if(user.password === currPassword ) 
                return User.updateOne({_id: id}, {password: newPassword})
                .then(() => {}) // return undefined
            else throw new Error ('wrong credentials')})    
}


module.exports = updateUserPassword