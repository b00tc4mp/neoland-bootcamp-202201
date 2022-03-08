const { connect, disconnect } = require ('mongoose')
const { User, Product, Order, Cart, Item } = require('./models')

connect('mongodb://localhost:27017/dp-db')
    .then(() => console.log('connected'))
    .then(() => Promise.all([
        User.deleteMany(),
        Product.deleteMany(),
        Order.deleteMany(),
        Cart.deleteMany(),
        Item.deleteMany()
    ]))

    
    .then(() => disconnect()
    .then(() => console.log('disconnected')))