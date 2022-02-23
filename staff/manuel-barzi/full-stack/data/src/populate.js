const { connect, disconnect } = require('mongoose')
const { User, CreditCard } = require('./models')

connect('mongodb://localhost:27017/demo-db')
    .then(() => console.log('connected'))

    //.then(() => User.create({ name: 'Agua Cate', email: 'agua@cate.com', password: '123123123'}))
    //.then(() => User.create({ name: 'Ora Culo', email: 'ora@culo.com', password: '123123123'}))
    .then(() => User.findById('62161ea9e658c5afa45c4d2b'))
    // .then(user => {
    //     user.name = 'Pepita Grilla'
    //     user.email = 'pepita@grilla.com'

    //     return user.save()
    // })
    .then(user => User.deleteOne({ _id: user.id }))
    .then(() => console.log('user deleted'))

    .then(() => disconnect())
    .then(() => console.log('disconnected'))