const { mongoose: { connect, disconnect }, models: { User } } = require('data')
const { authenticateUser, deleteUser, registerUser, retrieveUser, updateUser, updateUserPassword } = require('./index')

connect('mongodb://localhost:27017/demo-db')
    .then(() => Promise.all([
        User.deleteMany()
    ]))

    .then(() => registerUser('Pepito Grillo', 'pepito@grillo.com', '123123123'))
    .then(() => console.log('user registered'))

    // .then(() => authenticateUser('pepito@grillo.com', '123123123'))
    // .then(userId => console.log('user id', userId))

    // .then(() => authenticateUser('pepa@grilla.com', '123123123'))
    // .then(userId => {
    //     return updateUser(userId, { name: 'Pepa Grilla', email: 'pepa@grilla.com' })
    //         .then(() => console.log('user updated'))
    // })

    // .then(() => authenticateUser('pepa@grilla.com', '123123123'))
    // .then(userId => {
    //     return retrieveUser(userId)
    //         .then(user => console.log(user))
    // })

    .then(() => authenticateUser('pepito@grillo.com', '123123123'))
    .then(userId => {
        return updateUserPassword(userId, { name: 'Pepi Grilla', email: 'pepa@grilla.com' })
            .then(() => console.log('user updated'))
    })



    .catch(error => console.error(error.message))
    .then(() => disconnect())