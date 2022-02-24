const { mongoose: { connect, disconnect }, models: { User } } = require('data')
const registerUser = require('./registerUser')
const authenticateUser = require('./authenticateUser')
const updateUser = require('./updateUser')

connect('mongodb://localhost:27017/demo-db')
  // .then(() => Promise.all([
    //     //User.deleteMany()
    // ]))

    // .then(() => registerUser('Pepito Grillo', 'pepito@grillo.com', '123123123'))
    // .then(() => console.log('user registered'))

    // .then(() => authenticateUser('pepito@grillo.com', '123123123'))
    // .then(userId => console.log('user id', userId))

    .then(() => updateUser ('6217b88155c1be340a0f8abb', {email: 'pepite@grilla.com'}))
    // .then(() => updateUser ('6217b88155c1be340a0f8abb', {name: 'Pepita Grilla', email: 'pepita@grilla.com'}))
    .then(() => console.log('user updated'))

    .catch(error => console.error(error.message))
    .then(() => disconnect())