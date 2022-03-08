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
    updateUserPassword
} = require('./index')

connect('mongodb://localhost:27017/beHuman-db')
    .then(() => Promise.all([
        User.deleteOne({ email: 'pepito@grillo.com' })
    ]))
    
    .then(() => registerUser('pepitogrillo', 'pepito@grillo.com', '123123123'))
    .then(() => console.log('user registered'))

    .then(() => authenticateUser('pepito@grillo.com', '123123123'))
    .then(userId => console.log('user id', userId))

    .then(() => authenticateUser('pepito@grillo.com', '123123123'))
    .then(userId => {
        return updateUser(userId, { username: 'pepagrilla12', email: 'pepito@grillo.com', notifications: false })
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
        return updateUserPassword(userId, {currPassword:'123123123', newPassword:'234234234'})
            .then(() => console.log('password updated'))
    })

    .then(() => authenticateUser('pepito@grillo.com', '234234234'))
    .then(userId => {
        return toggleFavorite(userId, '6227604c0ae5ef6e69789e6a' )
            .then(() => console.log('favorite toggled'))
    })

    .then(() => authenticateUser('pepito@grillo.com', '234234234'))
    .then(userId => {
        return toggleFavorite(userId, '6227604c0ae5ef6e69789e67' )
            .then(() => console.log('favorite toggled'))
    })

    .then(() => authenticateUser('pepito@grillo.com', '234234234'))
    .then(userId => {
        return listFavorites(userId)
            .then(favorites => console.log(favorites))
    })

    .then(() => authenticateUser('pepito@grillo.com', '234234234'))
    .then(userId => {
        return toggleFriend(userId, '6227604c0ae5ef6e69789e5f' )
            .then(() => console.log('friend toggled'))
    })

    .then(() => authenticateUser('pepito@grillo.com', '234234234'))
    .then(userId => {
        return toggleFriend(userId, '6227604c0ae5ef6e69789e5d' )
            .then(() => console.log('friend toggled'))
    })

    .then(() => authenticateUser('pepito@grillo.com', '234234234'))
    .then(userId => {
        return listFriends(userId)
            .then(friends => console.log(friends))
    })

    .then(() => authenticateUser('pepito@grillo.com', '234234234'))
    .then(userId => {
        return deleteUser(userId, '234234234')
            .then(() => console.log('user deleted'))
    })

    .catch(error => console.error(error.message))
    .then(() => disconnect())