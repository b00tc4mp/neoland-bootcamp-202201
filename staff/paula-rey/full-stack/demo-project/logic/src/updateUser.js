const { models: { User } } = require("data")
const { validators: { validateId, validateString, validateEmail } } = require('commons')


function updateUser(userId, name, email) {
    validateId(userId, 'user id')
    validateString(name, 'name')
    validateEmail(email, 'email')

    return User.updateOne({ _id: userId }, { name, email })
        .then( result => {
            if (result.modifiedCount === 0) throw new Error(`user with id ${id} does not exist`)
        })
}


module.exports = updateUser


// function updateUser(id, { name, email }) {
//     return User.findById(id)
//     .then((user) => {
//       user.name = name || user.name;
//       user.email = email || user.email;
  
//       return user.save();
//     })
// }

//refactor1:

// function updateUser(id, {name, email}) {

//     return User.findById(id)
//         .then(user => user.updateOne({ name, email }))

// }


// refactor2:

// function updateUser(userId, {name, email}) {
//   validateId(userId, 'user id')
    
//     return User.updateOne({_id: userId}, { name, email })
//       .then(user => {
//         const doc = user._doc

//         delete doc._id
//         delete doc.password
//         delete doc.creditCard
//         delete doc.__v

//         return doc
//       })
// }
