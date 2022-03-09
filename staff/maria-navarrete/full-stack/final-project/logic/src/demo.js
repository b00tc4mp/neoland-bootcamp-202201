const { mongoose: { connect, disconnect }, models: { User, Action, Schedule } } = require('data')
const {
    authenticateUser,
    deleteUser,
    listFavorites,
    listFriends,
    listUsers,
    registerUser,
    retrieveUser,
    retrieveUserPublicInfo,
    toggleFavorite,
    toggleFriend,
    updateUser,
    updateUserPassword,
    createAction, 
    updateAction
} = require('./index')

connect('mongodb://localhost:27017/beHooman-db')
    .then(() => Promise.all([
        User.deleteOne({ email: 'pepito@grillo.com' })
    ]))

    .then(() => registerUser('pepitogrillo', 'pepito@grillo.com', '123123123'))
    .then(() => console.log('user registered'))

    .then(() => authenticateUser('pepito@grillo.com', '123123123'))
    .then(userId => console.log('user id', userId))

    .then(() => authenticateUser('pepito@grillo.com', '123123123'))
    .then(userId => {
        return updateUser(userId, 'pepagrilla12', 'pepito@grillo.com', false)
            .then(() => console.log('user updated'))
    })

    .then(() => authenticateUser('pepito@grillo.com', '123123123'))
    .then(userId => {
        return retrieveUser(userId)
            .then(user => console.log(user))
    })

    .then(() => authenticateUser('pepito@grillo.com', '123123123'))
    .then(userId => {
        return retrieveUserPublicInfo(userId)
            .then(user => console.log(user))
    })

    .then(() => authenticateUser('pepito@grillo.com', '123123123'))
    .then(userId => {
        return updateUserPassword(userId, '123123123', '234234234')
            .then(() => console.log('password updated'))
    })

    .then(() => authenticateUser('pepito@grillo.com', '234234234'))
    .then(userId => {
        return toggleFavorite(userId, '622888b02edb8a6c907bda88')
            .then(() => console.log('favorite toggled'))
    })

    .then(() => authenticateUser('pepito@grillo.com', '234234234'))
    .then(userId => {
        return toggleFavorite(userId, '622888b02edb8a6c907bda89')
            .then(() => console.log('favorite toggled'))
    })

    .then(() => authenticateUser('pepito@grillo.com', '234234234'))
    .then(userId => {
        return listFavorites(userId)
            .then(favorites => console.log(favorites))
    })

    .then(() => authenticateUser('pepito@grillo.com', '234234234'))
    .then(userId => {
        return toggleFriend(userId, '622888b02edb8a6c907bda7e')
            .then(() => console.log('friend toggled'))
    })

    .then(() => authenticateUser('pepito@grillo.com', '234234234'))
    .then(userId => {
        return toggleFriend(userId, '622888b02edb8a6c907bda7d')
            .then(() => console.log('friend toggled'))
    })

    .then(() => authenticateUser('pepito@grillo.com', '234234234'))
    .then(userId => {
        return listFriends(userId)
            .then(friends => console.log(friends))
    })

    .then(() => listUsers('a'))
    .then(users => console.log(users))

    .then(() => authenticateUser('pepito@grillo.com', '234234234'))
    .then(userId => {
        return deleteUser(userId, '234234234')
            .then(() => console.log('user deleted'))
    })

    .catch(error => console.error(error.message))
    .then(() => disconnect())