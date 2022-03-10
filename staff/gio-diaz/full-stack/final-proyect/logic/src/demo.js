const { mongoose: { connect, disconnect }, models: { User, Note } } = require('data')
const registerUser = require('./registerUser')
const authenticateUser = require('./authenticateUser')
const createNote = require('./createNote')

connect('mongodb://localhost:27017/mindPlus-db')
    .then(() => Promise.all([
        // User.deleteMany()
    ]))

    // .then(() => registerUser('Pepito Grillo', 'pepito@grillo.com', '123123123'))
    // .then(() => console.log('user registered'))

    .then(() => createNote('62274d6ba2361d9152825daf', 'hola', '2'))
    .then(() => console.log('note created'))

    // .then(() => authenticateUser('pepito_grillo.com', '123123123'))
    // .then(userId => console.log('user id', userId))

    .catch(error => console.error(error.message))
    .then(() => disconnect())