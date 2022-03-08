const { mongoose: { connect, disconnect }, models: { User, Racket } } = require('data')
const {
    registerUser,
    authenticateUser,
    updateUser,
    deleteUser,
    retrieveUser,
    updateUserPassword,
    createComment,
    toggleFavorite

} = require('./index')

connect('mongodb://localhost:27017/racketMatch-db')

    .then(() => Promise.all([
        User.deleteOne({ name: 'Pepito Grillo' })
    ]))

    .then(() => registerUser('Pepito Grillo', 'pepitogrillo@gmail.com', '123123123'))
    .then(() => console.log('user register'))

    .then(() => authenticateUser('pepitogrillo@gmail.com', '123123123'))
    .then((userId) => console.log('userId', userId))





    /* .then(() => createCommnet('62272e1a0ce84dd6e7c352fd', 'Perfecta pala'))
        .then(() => console.log('user commented'))
     */

    /* .then(() => Promise.all([
            User.deleteMany()
        ])) */

    /* .then(() => registerUser('Pepito Grillo', 'pepito@grillo.com', '123123123'))
    .then(() => console.log('user registered'))

    .then(() => authenticateUser('pepito@grillo.com', '123123123'))
    .then(userId => console.log('user id', userId)) */

    /* .then(() => updateUser('6217b65a464f7d97d5a0f179', {name: 'Pepitaa Grilla', email: 'pepito@grilla.com'}))
    .then(() => console.log('user updated')) */


    .catch(error => console.error(error.message))
    .then(() => disconnect())

