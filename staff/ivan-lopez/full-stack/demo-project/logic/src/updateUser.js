const { models: { User } } = require('data')

function updateUser(id, { name, email }) {

    return User.findById(id)
    .then((user) => {
        user.name = name || user.name; 
        user.email = email || user.email;
        
//  .then(user => user.updateOne({ name, email })) Esto es lo mismo que linea 5-6-7

        return user.save();
    })
}

module.exports = updateUser