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

        return Promise.all([anonymous.save(), agua.save(), ora.save(), wendy.save(), pepi.save(), sirius.save()])
    })


    .then(_users => {
        users = _users

        const [anonymous, agua, ora, wendy, pepi, sirius] = users

        const location1 = new Location({ user: agua.id, type: 'Restaurante', title: 'Restaurante Rosita', image: 'https://media-cdn.tripadvisor.com/media/photo-s/0d/26/ee/4e/su-entrada-principal.jpg', address: 'Calle Maria Cristina, 34', city: 'Barcelona' })
        const location2 = new Location({ user: agua.id, type: 'Playa', title: 'Playa del Morro', image: 'https://photo620x400.mnstatic.com/69668718400a76b234407987c597487d/playa-del-morro.jpg', address: 'Avenida plunchimplera, 8', city: 'Tarragona' })
        const location3 = new Location({ user: wendy.id, type: 'Bar', title: 'Bar Piripi, 98', image: 'https://media.timeout.com/images/105859395/750/422/image.jpg', address: 'Calle Garcia Lorca, 6', city: 'Barcelona' })
        const location4 = new Location({ user: wendy.id, type: 'Bar', title: 'Cafe-Bar Los Girasoles', image: 'https://media-cdn.tripadvisor.com/media/photo-s/0e/6a/ae/40/cafe-bar-los-girasoles.jpg', address: 'Avenida Principal, 1', city: 'Girona'})
        const location5 = new Location({ user: wendy.id, type: 'Playa', title: 'Playa de los Alemanes', image: 'https://i.ytimg.com/vi/yJ7HJFQ356Q/hqdefault.jpg', address: 'Rua Vallvidriera, 87', city: 'Girona' })
        const location6 = new Location({ user: sirius.id, type: 'Restaurante', title: 'Restaurante Pegatina', image: 'https://cloud10.todocoleccion.online/coleccionismo-pegatinas/tc/2020/02/28/22/195515275.jpg?size=720x720&crop=true', address: 'Avenida Margarita Castaño, 45', city: 'Lleida' })
        const location7 = new Location({ user: sirius.id, type: 'Bar', title: 'Bar Canigo', image: 'https://media-cdn.tripadvisor.com/media/photo-s/19/2c/07/99/entrada.jpg', address: 'Calle Flor y Cascabel, 541', city: 'Lleida'})

        return Promise.all([location1.save(), location2.save(), location3.save(), location4.save(), location5.save(), location6.save(), location7.save()])
    })

    .then(locations => {

        const [location1, location2, location4, location5, location6, location7] = locations
        const [anonymous, agua, ora, wendy, pepi, sirius] = users

        const pepiComment = new Comment({ user: pepi.id, location: location1.id, text: 'super atentos con mis peludos gran sitio!' })
        const aguaComment1 = new Comment({ user: agua.id, location: location5.id, text: 'playa muy sucia' })
        const aguaComment2 = new Comment({ user: agua.id, location: location4.id, text: 'muy buen lugar para ir con tu amigo peludo'})
        const siriusComment = new Comment({ user: sirius.id, location: location5.id, text: 'me encantan los atardeceres alli, no hay mucha gente por lo que no resulta agobiante'})
        const wendyComment = new Comment({ user: wendy.id, location: location7.id, text: 'imposible estar traqnuilo dentro del aforo que tiene siempre'})

        pepi.favorites.push(location2)
        sirius.favorites.push(location1, location2, location5)
        wendy.favorites.push(location2, location6, location7)

        return Promise.all([pepiComment.save(), aguaComment1.save(), aguaComment2.save(), siriusComment.save(), wendyComment.save(), pepi.save(), sirius.save(), agua.save(), ora.save(), wendy.save()])

    })



    .then(() => disconnect())
    .then(() => console.log('disconnected'))