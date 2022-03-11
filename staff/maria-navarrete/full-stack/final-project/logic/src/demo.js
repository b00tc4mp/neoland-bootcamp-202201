const { mongoose: { connect, disconnect }, models: { User, Action, Schedule } } = require('data')
const {
    authenticateUser,
    deleteUser,
    listFavorites,
    listFriends,
    findUsers,
    registerUser,
    retrieveUser,
    retrieveUserPublicInfo,
    toggleFavorite,
    toggleFriend,
    updateUser,
    updateUserPassword,
    createAction,
    retrieveAction,
    listUserPublicActions,
    listUserActions,
    updateAction,
    deleteAction,
    findActions,
    createSchedule,
    retrieveSchedule,
    listSchedules,
    updateSchedule,
    cancelSchedule,
    completeSchedule
} = require('./index')

let actionCreated
let actionCreated2

connect('mongodb://localhost:27017/bHooman-db')
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
        return toggleFavorite(userId, '622b3438889e5584929ab41b')
            .then(() => console.log('favorite toggled'))
    })

    .then(() => authenticateUser('pepito@grillo.com', '234234234'))
    .then(userId => {
        return toggleFavorite(userId, '622b3438889e5584929ab419')
            .then(() => console.log('favorite toggled'))
    })

    .then(() => authenticateUser('pepito@grillo.com', '234234234'))
    .then(userId => {
        return listFavorites(userId)
            .then(favorites => console.log(favorites))
    })

    .then(() => authenticateUser('pepito@grillo.com', '234234234'))
    .then(userId => {
        return toggleFriend(userId, '622b3437889e5584929ab3ff')
            .then(() => console.log('friend toggled'))
    })

    .then(() => authenticateUser('pepito@grillo.com', '234234234'))
    .then(userId => {
        return toggleFriend(userId, '622b3437889e5584929ab3fe')
            .then(() => console.log('friend toggled'))
    })

    .then(() => authenticateUser('pepito@grillo.com', '234234234'))
    .then(userId => {
        return listFriends(userId)
            .then(friends => console.log(friends))
    })

    .then(() => findUsers('123'))
    .then(users => console.log(users))

    .then(() => authenticateUser('pepito@grillo.com', '234234234'))
    .then(userId => {
        return createAction(userId, 'Regala algo que no uses a una persona que lo necesite', true, 5, 0)
            .then(actionId => {
                actionCreated = actionId
                console.log('action created', actionId)
            })
    })

    .then(() => authenticateUser('pepito@grillo.com', '234234234'))
    .then(userId => {
        return createAction(userId, 'Invita a un desayuno a un necesitado', true, 10, 5)
            .then(actionId => {
                actionCreated2 = actionId
                console.log('action created', actionId)
            })
    })

    .then(() => authenticateUser('pepito@grillo.com', '234234234'))
    .then(userId => {
        return retrieveAction(userId, actionCreated2)
            .then(action => console.log(action))
    })

    .then(() => authenticateUser('pepito@grillo.com', '234234234'))
    .then(userId => {
        return updateAction(userId, actionCreated2, 'Usa medios de transporte sostenibles hoy', false, 60, 0)
            .then(() => console.log('action updated'))
    })

    .then(() => authenticateUser('pepito@grillo.com', '234234234'))
    .then(userId => {
        return retrieveAction(userId, actionCreated2)
            .then(action => console.log(action))
    })

    .then(() => authenticateUser('pepito@grillo.com', '234234234'))
    .then(userId => {
        return listUserActions(userId)
            .then(actions => console.log(actions))
    })

    .then(() => authenticateUser('pepito@grillo.com', '234234234'))
    .then(userId => {
        return listUserPublicActions(userId)
            .then(actions => console.log(actions))
    })

    .then(() => authenticateUser('pepito@grillo.com', '234234234'))
    .then(userId => {
        return deleteAction(userId, actionCreated)
            .then(() => console.log('action deleted'))
    })

    .then(() => authenticateUser('pepito@grillo.com', '234234234'))
    .then(userId => {
        return deleteAction(userId, actionCreated2)
            .then(() => console.log('action deleted'))
    })

    .then(() => findActions({ reqBudget: 0, query: 'RECOGE' }))
    .then(result => console.log(result))

    .then(() => authenticateUser('pepito@grillo.com', '234234234'))
    .then(userId => {
        return deleteUser(userId, '234234234')
            .then(() => console.log('user deleted'))
    })

    .catch(error => console.error(error.message))
    .then(() => disconnect())