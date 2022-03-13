const { connect, disconnect } = require('mongoose')
const { User, Comment, Location } = require('./models')
const { user } = require('./Schemas')

let users
let locations
let comments

connect('mongodb://localhost:27017/dogether-db')
    .then(() => console.log('connected'))
    .then(() => Promise.all(
        [User.deleteMany(),
        Comment.deleteMany(),
        Location.deleteMany()
        ]))


    .then(() => {
        const anonymous = new User({ name: 'anonymous', email: 'anonymous@mail.com', password: '123123123' })
        const agua = new User({ name: 'Agua Cate', email: 'aguacate@mail.com', password: '123123123' })
        const ora = new User({ name: 'Ora Culo', email: 'oraculo@mail.com', password: '123123123' })
        const wendy = new User({ name: 'Wendy Pan', email: 'wendypan@mail.com', password: '123123123' })
        const pepi = new User({ name: 'Pepi Gri', email: 'pepigri@mail.com', password: '123123123' })
        const sirius = new User({ name: 'Sirius Black', email: 'siriusblack@mail.com', password: '123123123' })

        ora.follows.push(agua.id, wendy.id)
        sirius.follows.push(wendy.id)

        return Promise.all([anonymous.save(), agua.save(), ora.save(), wendy.save(), pepi.save(), sirius.save()])
    })


    .then(_users => {
        users = _users

        const [anonymous, agua, ora, wendy, pepi, sirius] = users

        const location1 = new Location({ user: agua.id, type: 'restaurante', title: 'Restaurante Rosita', image: 'https://media-cdn.tripadvisor.com/media/photo-s/0d/26/ee/4e/su-entrada-principal.jpg', address: 'Calle Maria Cristina, 34', city: 'barcelona' })
        const location2 = new Location({ user: ora.id, type: 'playa', title: 'Playa del Morro', image: 'https://photo620x400.mnstatic.com/69668718400a76b234407987c597487d/playa-del-morro.jpg', address: 'Avenida plunchimplera, 8', city: 'tarragona' })


        return Promise.all([location1.save(), location2.save()])
    })

    .then(locations => {

        const [location1, location2] = locations
        const [anonymous, agua, ora, wendy, pepi, sirius] = users

        const pepiComment = new Comment({ user: pepi.id, location: location1.id, text: 'super atentos con mis peludos gran sitio!' })
        const aguaComment = new Comment({ user: agua.id, location: location2.id, text: 'maravilloso, los amo' })


        pepi.favorites.push(location2)
        sirius.favorites.push(location1, location2)

        return Promise.all([pepiComment.save(), aguaComment.save(), pepi.save(), sirius.save(), agua.save(), ora.save(), wendy.save()])

    })



    .then(() => disconnect())
    .then(() => console.log('disconnected'))