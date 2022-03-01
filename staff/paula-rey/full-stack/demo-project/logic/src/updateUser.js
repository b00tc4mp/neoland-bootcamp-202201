const { models: { User } } = require('data')
const { validators: { validateId } } = require('commons')

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

function updateUser(id, {name, email}) {
  validateId(id)
    
    return User.updateOne({_id: id}, { name, email })
      .then(user => {

        delete doc._id
        delete doc.password
        delete doc.creditCard
        delete doc.__v

        return doc
      })
}


module.exports = updateUser