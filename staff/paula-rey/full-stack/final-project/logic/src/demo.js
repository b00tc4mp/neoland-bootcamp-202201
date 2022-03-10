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

let comment
let location

connect('mongodb://localhost:27017/dogether-db')
    // .then(() => Promise.all([
    //     //User.deleteMany()
    // ]))

    .then(() => Promise.all([
        User.deleteOne({ email: 'pepito@grillo.com' })
    ]))

    .then(() => registerUser('Pepito Grillo', 'pepito@grillo.com', '123123123'))
    .then(() => console.log('user registered'))


    .then(() => authenticateUser('pepito@grillo.com', '123123123'))
    .then(userId => console.log('user id', userId))
/*
    .then(() => authenticateUser('pepito@grillo.com', '123123123'))
    .then(userId => {
        return updateUser(userId, 'Pepita Grilla', 'pepito@grillo.com')
            .then(() => console.log('user updated'))
    })


    .then(() => authenticateUser('pepito@grillo.com', '123123123'))
    .then(userId => {
        return retrieveUser(userId)
            .then(user => console.log(user))
    })

    .then(() => authenticateUser('pepito@grillo.com', '123123123'))
    .then(userId => {
        return updateUserPassword(userId, '123123123', '111222333')
            .then(() => console.log('password updated'))
    })


    .then(() => authenticateUser('pepito@grillo.com', '111222333'))
    .then(userId => {
        return toggleFavorite(userId, '62288a119814635f4138f169')
            .then(() => console.log('favorite toggled'))
    })

    .then(() => authenticateUser('pepito@grillo.com', '111222333'))
    .then(userId => {
        return toggleFavorite(userId, '62288a119814635f4138f168')
            .then(() => console.log('favorite toggled'))
    })

    .then(() => authenticateUser('pepito@grillo.com', '111222333'))
    .then(userId => {
        return listFavorites(userId)
            .then(favorites => console.log(favorites))
    })

    .then(() => authenticateUser('pepito@grillo.com', '111222333'))
    .then(userId => {
        return toggleFollow(userId, '62288a119814635f4138f15d')
            .then(() => console.log('follow toggled'))
    })

    .then(() => authenticateUser('pepito@grillo.com', '111222333'))
    .then(userId => {
        return toggleFollow(userId, '62288a119814635f4138f15f')
            .then(() => console.log('follow toggled'))
    })

    .then(() => authenticateUser('pepito@grillo.com', '111222333'))
    .then(userId => {
        return listFollows(userId)
            .then(follows => console.log(follows))
    })


    // .then(() => authenticateUser('agua@grillo.com', '111222333'))
    // .then(userId => {
    //     return deleteUser (userId, '111222333')
    //     .then(() => console.log('user deleted'))
    // })

    // .then(() => deleteUser ('622888e948e214d781cdf5cd', '123123123'))
    // .then(() => console.log('user deleted'))


    .then(() => authenticateUser('pepito@grillo.com', '111222333'))
    .then(userId => {
        return createComment(userId, '62288a119814635f4138f168', 'Playa muy sucia llena de cacas')
            .then(commentId => {
                comment = commentId
                console.log('comment created', comment)
            })
    })

    .then(() => authenticateUser('pepito@grillo.com', '111222333'))
    .then(userId => {
        return createComment(userId, '62288a119814635f4138f168', 'Playa muy sucia llena de humanos')
            .then(commentId => {
                comment = commentId
                console.log('comment created', comment)
            })
    })

    .then(() => listLocationsComments('62288a119814635f4138f168'))
    .then((listComments) => console.log(listComments))


    .then(() => {
        return retrieveComment(comment)
            .then(_comment => console.log(_comment))
    })

    .then(() => authenticateUser('pepito@grillo.com', '111222333'))
    .then((userId) => {
        return deleteComment(userId, comment)
            .then(() => console.log('comment deleted'))
    })

    // .then(() => deleteComment ('62288eebd1d5876d10f42ad8','62288a119814635f4138f161'))
    // .then(() => console.log('comment deleted'))

    // .then(() => searchLocations('Avenida'))
    // .then((results) => console.log(results) )
*/



    .then(() => authenticateUser('pepito@grillo.com', '123123123'))
    .then(userId => {
        return createLocation(userId, 'Playa', 'Playa de la Concha', 'https://media-cdn.tripadvisor.com/media/photo-s/0d/26/ee/4e/su-entrada-principal.jpg', 'Calle la conchita, 67', 'Tarragona')
            .then(locationId => {
                location = locationId
                console.log('location created', location)
            })
    })
    
    .then(() => authenticateUser('pepito@grillo.com', '123123123'))
    .then(userId => {

        return createLocation(userId, 'Hotel', 'Hotel Polaquera', 'https://media-cdn.tripadvisor.com/media/photo-s/0d/26/ee/4e/su-entrada-principal.jpg', 'Rua la Polaca, 98', 'Barcelona')
            .then(locationId => {
                location = locationId
                console.log('location created', location)
            })
    })

    .then(() => authenticateUser('pepito@grillo.com', '123123123'))
    .then(userId => {
        return listUserLocations(userId)
            .then((listLocations) => console.log(listLocations))
    })

    .then(() => {
        return retrieveLocation(location)
            .then(_location => console.log(_location))
    })

    .then(() => authenticateUser('pepito@grillo.com', '123123123'))
    .then(userId => {
        return updateLocation(userId, location, 'Hotel', 'Hostal Polaquera', 'https://media-cdn.tripadvisor.com/media/photo-s/0d/26/ee/4e/su-entrada-principal.jpg', 'Rua las Polacas, 98', 'Barcelona')
            .then(() => console.log('location updated'))
    })



    // .then(() => authenticateUser('pepito@grillo.com', '111222333'))
    // .then((userId) => {
    //     return deleteLocation(locqation,userId)
    //         .then(() => console.log('location deleted'))
    // })





    .catch(error => console.error(error.message))
    .then(() => disconnect())