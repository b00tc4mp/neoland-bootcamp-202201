const { mongoose: { connect, disconnect }, models: { User } } = require('data')
const registerUser = require('./registerUser')
const authenticateUser = require('./authenticateUser')
const updateUser = require('./updateUser')
const retrieveUser = require('./retrieveUser')
const updateUserPassword = require('./updateUserPassword')
const deleteUser = require('./deleteUser')
const { user } = require('data/src/Schemas')

connect('mongodb://localhost:27017/demo-db')
    // .then(() => Promise.all([
    //     //User.deleteMany()
    // ]))

    // .then(() => registerUser('Pepito Grillo', 'pepito@grillo.com', '123123123'))
    // .then(() => console.log('user registered'))


    // .then(() => authenticateUser('pepito@grillo.com', '123123123'))
    // .then(userId => console.log('user id', userId))


    // .then(() => updateUser ('6217b88155c1be340a0f8abb', {email: 'pepite@grilla.com'}))
    // // .then(() => updateUser ('6217b88155c1be340a0f8abb', {name: 'Pepita Grilla', email: 'pepita@grilla.com'}))
    // .then(() => console.log('user updated'))


    // .then(() => retrieveUser('621b641f343bc3779233ed3d'))
    // .then(user => console.log('user', user))


    // .then(() => updateUserPassword ('6217b88155c1be340a0f8abb', {password: '123123123'}))
    // .then(() => console.log('password updated'))
    // //???????????????????????

    // .then(() => deleteUser ('6217b88155c1be340a0f8abb'))
    // .then(() => console.log('user deleted'))
    


    .catch(error => console.error(error.message))
    .then(() => disconnect())