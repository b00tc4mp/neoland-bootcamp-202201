const { mongoose: { connect, disconnect }, models: { User, Note } } = require('data')
const {
    authenticateUser,
    registerUser,
    retrieveUser,
    updateUser,
    deleteUser, 
    createNote,
    updateUserPassword,
    retrieveNote
} = require('./index')


connect('mongodb://localhost:27017/mindPlus-db')
    .then(() => Promise.all([
        // User.deleteMany()
    ]))

    .then(() => registerUser('gio', 'gio@mail.com', '123123123'))
    .then(() => console.log('user registered'))

    .then(() => authenticateUser('gio', 'gio@mail.com', '123123123'))
    .then(userId => console.log('user id', userId))

    .then(() => authenticateUser('gio', 'gio@mail.com', '123123123'))
    .then(userId => {
        return retrieveUser(userId)
            .then(user => console.log(user))
    })

    .then(() => createNote('62274d6ba2361d9152825daf', 'hola', '2'))
    .then(() => console.log('note created'))

    
 
    .then(() => authenticateUser('maria@mail.com', '123123123'))
    .then(userId => {
        return retrieveNote(userId)
            .then(user => console.log(note))
    })


    .catch(error => console.error(error.message))
    .then(() => disconnect())