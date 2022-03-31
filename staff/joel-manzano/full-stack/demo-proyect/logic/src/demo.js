const { mongoose: { connect, disconnect }, models: { User } } = require('data')
const registerUser = require('./registerUser')
const authenticateUser = require('./authenticateUser')

connect('mongodb://localhost:27017/demo-db')
    .then(() => Promise.all([
        User.deleteMany()
    ]))

    .then(() => registerUser('Pepito Grillo', 'pepito_grillo.com', '123123123'))
    .then(() => console.log('user registered'))

    // .then(() => authenticateUser('pepito_grillo.com', '123123123'))
    // .then(userId => console.log('user id', userId))

    .catch(error => console.error(error.message))
    .then(() => disconnect())
    