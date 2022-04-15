const { mongoose: { connect, disconnect }, models: { User } } = require('data')
const registerUser = require('./registerUser')
const retrieveUsers = require('./retrieveUser')
const authenticateUser = require('./authenticateUser')

connect('mongodb://localhost:27017/demo-db')
    .then(() => Promise.all([
        User.deleteMany()
    ]))

    .then(() => registerUser('Pepito Grillo', 'pepito@grillo.com', '123123123'))
    .then(() => console.log('user registered'))

    .then(() => retrieveUsers())
    .then((users) => {
        debugger
        users[0].doc
    })

    // .then(() => authenticateUser('pepito_grillo.com', '123123123'))
    // .then(userId => console.log('user id', userId))

    .catch(error => console.error(error.message))
    .then(() => disconnect())
