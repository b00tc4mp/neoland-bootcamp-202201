const { mongoose: { connect, disconnect }, models: { User, Location, Comment } } = require('data')
const {
    registerUser,
    authenticateUser,
    updateUser,
    retrieveUser,
    updateUserPassword,
    deleteUser,
    toggleFavorite,
    listFavorites,
    toggleFollow,
    listFollows,
    createComment,
    retrieveComment,
    listLocationsComments,
    deleteComment,
    searchLocations,
    createLocation,
    retrieveLocation,
    listUserLocations,
    updateLocation,
    deleteLocation
} = require('./index')

let commentId1
let commentId2
let locationId1
let locationId2
let aguaGrilloId
let fireGrilloId

connect('mongodb://localhost:27017/dogether-db')
    // .then(() => Promise.all([
    //     //User.deleteMany()
    // ]))

    .then(() => Promise.all([
        User.deleteOne({ email: 'pepito@grillo.com' }),
        Location.deleteMany(),
        Comment.deleteMany()
    ]))

    .then(() => registerUser('Pepito Grillo', 'pepito@grillo.com', '123123123'))
    .then(() => console.log('user registered'))


    .then(() => authenticateUser('pepito@grillo.com', '123123123'))
    .then(userId => console.log('user id', userId))

    .then(() => authenticateUser('pepito@grillo.com', '123123123'))
    .then(userId => {
        return retrieveUser(userId)
            .then(user => console.log(user))
    })

    .then(() => authenticateUser('pepito@grillo.com', '123123123'))
    .then(userId => {
        return updateUser(userId, 'Pepita Grilla', 'pepito@grillo.com')
            .then(() => console.log('user updated'))
    })

    .then(() => authenticateUser('pepito@grillo.com', '123123123'))
    .then(userId => {
        return updateUserPassword(userId, '123123123', '123123123')
            .then(() => console.log('password updated'))
    })

    .then(() => authenticateUser('pepito@grillo.com', '123123123'))
    .then(userId => {

        const location1 = createLocation(userId, 'hotel', 'Hotel Polaquera', 'https://media-cdn.tripadvisor.com/media/photo-s/0d/26/ee/4e/su-entrada-principal.jpg', 'Rua la Polaca, 98', 'barcelona')
            .then(locationId => {
                locationId1 = locationId
                console.log('location created', locationId)
            })

        const location2 = createLocation(userId, 'playa', 'Playa de la Concha', 'https://media-cdn.tripadvisor.com/media/photo-s/0d/26/ee/4e/su-entrada-principal.jpg', 'Calle la conchita, 67', 'tarragona')
        .then(locationId => {
            locationId2 = locationId
            console.log('location created', locationId)
        })

        return Promise.all([location1, location2])
    })

    .then(() => authenticateUser('pepito@grillo.com', '123123123'))
    .then(userId => {
        return listUserLocations(userId)
            .then((listLocations) => console.log(listLocations))
    })

    .then(() => authenticateUser('pepito@grillo.com', '123123123'))
    .then(userId => {
        return updateLocation(userId, locationId1, 'Hotel', 'Hostal Polaquera', 'https://media-cdn.tripadvisor.com/media/photo-s/0d/26/ee/4e/su-entrada-principal.jpg', 'Rua las Polacas, 98', 'Barcelona')
            .then(() => console.log('location updated'))
    })

    .then(() => {
        return retrieveLocation(locationId1)
            .then(location => console.log(location))
    })

    .then(() => authenticateUser('pepito@grillo.com', '123123123'))
    .then(userId => {
        return toggleFavorite(userId, locationId1)
            .then(() => console.log('favorite toggled'))
    })

    .then(() => authenticateUser('pepito@grillo.com', '123123123'))
    .then(userId => {
        return toggleFavorite(userId, locationId2)
            .then(() => console.log('favorite toggled'))
    })

    .then(() => authenticateUser('pepito@grillo.com', '123123123'))
    .then(userId => {
        return listFavorites(userId)
            .then(favorites => console.log(favorites))
    })


    .then(() => registerUser('Agua Grillo', 'agua@grillo.com', '123123123'))
    .then(() => console.log('user2 registered'))

    .then(() => authenticateUser('agua@grillo.com', '123123123'))
    .then(userId => { aguaGrilloId = userId})

    .then(() => registerUser('Fire Grillo', 'fire@grillo.com', '123123123'))
    .then(() => console.log('user2 registered'))

    .then(() => authenticateUser('fire@grillo.com', '123123123'))
    .then(userId => { fireGrilloId = userId})

    .then(() => authenticateUser('pepito@grillo.com', '123123123'))
    .then(userId => {
        return toggleFollow(userId, aguaGrilloId)
            .then(() => console.log('follow toggled'))
    })

    .then(() => authenticateUser('pepito@grillo.com', '123123123'))
    .then(userId => {
        return toggleFollow(userId, fireGrilloId)
            .then(() => console.log('follow toggled'))
    })

    .then(() => authenticateUser('pepito@grillo.com', '123123123'))
    .then(userId => {
        return listFollows(userId)
            .then(follows => console.log(follows))
    })

    .then(() => authenticateUser('agua@grillo.com', '123123123'))
    .then(userId => deleteUser (userId, '123123123'))
    .then(() => console.log('user deleted'))

    .then(() => authenticateUser('fire@grillo.com', '123123123'))
    .then(userId => deleteUser (userId, '123123123'))
    .then(() => console.log('user deleted'))
    
    
    .then(() => authenticateUser('pepito@grillo.com', '123123123'))
    .then(userId => {
        const comment1 = createComment(userId, locationId1, 'Playa muy sucia llena de cacas')
            .then(commentId => {
                commentId1 = commentId
                console.log('comment created', commentId)
            })
        const comment2 = createComment(userId, locationId1, 'Playa muy sucia llena de humanos')
            .then(commentId => {
                commentId2 = commentId
                console.log('comment created', commentId)
            })
            return Promise.all([comment1, comment2])
    })

    .then(() => listLocationsComments(locationId1))
    .then((listComments) => console.log(listComments))

    .then(() => {
        return retrieveComment(commentId1)
            .then(comment => console.log(comment))
    })

    .then(() => authenticateUser('pepito@grillo.com', '123123123'))
    .then((userId) => {
        return deleteComment(userId, commentId1)
            .then(() => console.log('comment deleted'))
    })

    .then(() => authenticateUser('pepito@grillo.com', '123123123'))
    .then((userId) => {
        return deleteLocation(locationId1, userId)
            .then(() => console.log('location deleted'))
    })

    // .then(() => searchLocations('Avenida'))
    // .then((results) => console.log(results))



    .catch(error => console.error(error.message))
    .then(() => disconnect())