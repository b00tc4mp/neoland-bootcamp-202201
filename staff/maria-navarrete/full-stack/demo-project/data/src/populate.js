const { connect, disconnect } = require('mongoose')
const { Brand, CreditCard, Order, Product, Property, Stock, User } = require('./models')

connect('mongodb://localhost:27017/demo-db')
    .then(() => console.log('connected'))
    .then(() => Promise.all([
        Brand.deleteMany(),
        CreditCard.deleteMany(),
        Order.deleteMany(),
        Product.deleteMany(),
        Property.deleteMany(),
        Stock.deleteMany(),
        User.deleteMany()
    ]))
    .then(() => {
        const agua = new User({ name: 'Agua Cate', email: 'agua@cate.com', password: '123123123' })
        const ora = new User({ name: 'Ora Culo', email: 'ora@culo.com', password: '123123123' })

        return Promise.all([agua.save(), ora.save()])
    })
    .then(users => {
        const [agua, ora] = users
        const aguaCard = new CreditCard({ fullName: 'Agua Cate Quesis', number: '1234 1234 1234 1234', expiration: new Date })
        agua.creditCards.push(aguaCard)

        const aguaCard2 = new CreditCard({ fullName: 'Agua Cate Quesis', number: '3456 3456 3456 3456', expiration: new Date })
        agua.creditCards.push(aguaCard2)

        const oraCard = new CreditCard({ fullName: 'Ora Culo Quesis', number: '2345 2345 2345 2345', expiration: new Date })
        ora.creditCards.push(oraCard)

        return Promise.all([agua.save(), ora.save()])
    })
    .then(() => {
        const nike = new Brand({ name: 'Nike' })
        const adidas = new Brand({ name: 'Adidas' })
        const converse = new Brand({ name: 'Converse' })

        return Promise.all([nike.save(), adidas.save(), converse.save()])
    })
    .then(([nike, adidas, converse]) => {
        const airMax = new Product({ brand: nike.id, model: 'Air Max', cost: 100, price: 120, serial: 'NIKE-SERIAL-123123123', image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/04f7ca5f-2412-4511-993c-2e08e542eb33/air-max-90-zapatillas-6SdNzK.png' })
        const airMax2 = new Product({ brand: nike.id, model: 'Air Max 2', cost: 110, price: 135, serial: 'NIKE-SERIAL-234234234', image: 'https://m.media-amazon.com/images/I/61S9rdrwGsL._AC_UY395_.jpg' })
        const vaporMax = new Product({ brand: nike.id, model: 'Vapor Max', cost: 105, price: 125, serial: 'NIKE-SERIAL-345345345', image: 'https://cdn.shopify.com/s/files/1/0933/1060/products/nike-air-vapormax-flyknit-3-black-white-metallic-silver-aj6900-002_1800x1800.jpg?v=1556750119' })

        const nikes = [airMax, airMax2, vaporMax]

        const nizza = new Product({ brand: adidas.id, model: 'Nizza', cost: 80, price: 100, serial: 'ADIDAS-SERIAL-123123123', image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/eec160da7d2f41d1bd6aabeb0009028d_9366/Zapatilla_Nizza_Platform_Negro_FV5321_01_standard.jpg' })
        const stanSmith = new Product({ brand: adidas.id, model: 'Stan Smith', cost: 90, price: 110, serial: 'ADIDAS-SERIAL-234234234', image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/68ae7ea7849b43eca70aac1e00f5146d_9366/Zapatilla_Stan_Smith_Blanco_FX5502_01_standard.jpg' })

        const adidass = [nizza, stanSmith]

        const allStar = new Product({ brand: converse.id, model: 'AllStar', cost: 60, price: 80, serial: 'CONVERSE-SERIAL-123123123', image: 'https://www.converse.com/dw/image/v2/AALW_PRD/on/demandware.static/-/Sites-ConverseMaster/default/dw2752aa8f/images/a_107/M9160_A_107X1.jpg?sw=2000' })
        const chuck70 = new Product({ brand: converse.id, model: 'Chuck 70', cost: 65, price: 95, serial: 'CONVERSE-SERIAL-234234234', image: 'https://www.converse.com/dw/image/v2/AALW_PRD/on/demandware.static/-/Sites-ConverseMaster/default/dw4aeb88f6/images/a_107/173121C_A_107X1.jpg?sw=2000' })

        const converses = [allStar, chuck70]

        return Promise.all([
            Promise.all(nikes.map(nike => nike.save())),
            Promise.all(adidass.map(adidas => adidas.save())),
            Promise.all(converses.map(converse => converse.save()))
        ])
    })

    .then(([[airMax, airMax2, vaporMax], [nizza, stanSmith], [allStar, chuck70]]) => {
        const airMaxBlack42 = new Stock({ product: airMax.id, quantity: 150, color: 'black', size: 42 })
        const airMaxWhite42 = new Stock({ product: airMax.id, quantity: 100, color: 'white', size: 42 })
        const airMaxBlack43 = new Stock({ product: airMax.id, quantity: 100, color: 'black', size: 43 })
        const airMaxWhite43 = new Stock({ product: airMax.id, quantity: 75, color: 'white', size: 43 })


        const airMaxStocks = [airMaxBlack42, airMaxWhite42, airMaxBlack43, airMaxWhite43]

        const nizzaBlack42 = new Stock({ product: nizza.id, quantity: 40, color: 'black', size: 42 })
        const nizzaWhite42 = new Stock({ product: nizza.id, quantity: 50, color: 'white', size: 42 })
        const nizzaBlack43 = new Stock({ product: nizza.id, quantity: 30, color: 'black', size: 43 })
        const nizzaWhite43 = new Stock({ product: nizza.id, quantity: 40, color: 'white', size: 43 })

        const nizzaStocks = [nizzaBlack42, nizzaWhite42, nizzaBlack43, nizzaWhite43]

        return Promise.all([
            Promise.all(airMaxStocks.map(stock => stock.save())),
            Promise.all(nizzaStocks.map(stock => stock.save()))
        ])
    })
    .then(([[airMaxBlack42, airMaxWhite42, airMaxBlack43, airMaxWhite43], [nizzaBlack42, nizzaWhite42, nizzaBlack43, nizzaWhite43]]) => {
        return User.findOne({ name: 'Agua Cate' })
            .then(user => {
                const airMaxBlack42Order = new Order({ stock: airMaxBlack42.id, user: user.id, quantity: 1, date: new Date })
                airMaxBlack42.quantity--

                return Promise.all([airMaxBlack42.save(), airMaxBlack42Order.save()])
            })
            .then(([airMaxBlack42, airMaxBlack42Order]) => {
                return airMaxBlack42Order.id
            })
    })
    .then(orderId => {
        return Order.findById(orderId)
            .then(order => {
                console.log('order', order._doc)
                return Stock.findById(order.stock)
            })
            .then(stock => {
                console.log('stock', stock._doc)
                return Product.findById(stock.product)
            })
            .then(product => {
                console.log('product', product._doc)
                return Brand.findById(product.brand)
            })
            .then(brand => console.log('brand', brand))
    })


    // .then(()=> User.create({name: 'Agua Cate', email: 'agua@cate.com', password: '123123123'}))
    // .then(() => User.create({ name: 'Ora Culo', email: 'ora@culo.com', password: '123123123'}))
    // .then(()=> User.findById('621622d8eff2ecffb5d7cc5d'))
    // .then(user=>{
    //     user.name= 'Maria Paula Pan'
    //     user.email = 'mariapaula@pan.com'

    //     return user.save()
    // })
    // // .then(()=> User.findById('62162084eff2ecffb5d7cc59'))
    // // .then(user=> User.deleteOne({_id: user.id}))
    // .then(() => console.log('user deleted'))
    // .then(([agua, ora]) => {
    //     const talent = new Property({
    //         cadastral: 'ES-CA-123123123',
    //         date: new Date,
    //         address: 'Ramon Turro 169',
    //         area: 3000,
    //         owners: [agua.id, ora.id]
    //     })

    //     return talent.save()
    // })
    // .then(talent => User.find({ _id: { $in: talent.owners } }))
    // .then(users => {
    //     const [agua, ora] = users
    // })

    .then(() => disconnect())

    .then(() => console.log('disconnected'))
