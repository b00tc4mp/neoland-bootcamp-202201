const { connect, disconnect } = require('mongoose')
const { User, Comment, Location } = require('./models')

connect('mongodb://localhost:27017/dogether-db')
.then(() => console.log('connected'))
//.then(() => Promise.all([User.deleteMany()]))

    
    /*
    .then(() => {
        const agua = new User({ name: 'Agua Cate', email: 'aguacate@mail.com', password: '123123123' })
        const ora = new User({ name: 'Ora Culo', email: 'oraculo@mail.com', password: '123123123' })
        const wendy = new User({ name: 'Wendy Pan', email: 'wendypan@mail.com', password: '123123123' })
        const pepi = new User({ name: 'Pepi Gri', email: 'pepigri@mail.com', password: '123123123' })
        const sirius = new User({ name: 'Sirius Black', email: 'siriusblack@mail.com', password: '123123123' })
        
        return Promise.all([agua.save(), ora.save(), wendy.save(), pepi.save(), sirius.save()])
    }) 
    */

    .then(users => {
        const [agua, ora, wendy, pepi, sirius] = users

        const aguaCard = new CreditCard({ fullName: 'Agua Cate Quesis', number: '1234 1234 1234 1234', expiration: new Date })
        agua.creditCards.push(aguaCard)

        const aguaCard2 = new CreditCard({ fullName: 'Agua Cate Quesis', number: '3456 3456 3456 3456', expiration: new Date })
        agua.creditCards.push(aguaCard2)

        const oraCard = new CreditCard({ fullName: 'Ora Culo Quesis', number: '2345 2345 2345 2345', expiration: new Date })
        ora.creditCards.push(oraCard)

        return Promise.all([agua.save(), ora.save()])
    })

    

    .then(() => disconnect())
    .then(() => console.log('disconnected'))