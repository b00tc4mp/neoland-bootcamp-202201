const { connect, disconnect } = require('mongoose')
const { User, CreditCard, Property, Brand, Product, Stock, Order } = require('./models')



connect('mongodb://localhost:27017/demo-db')
    .then(() => console.log('connected'))
    .then(() => Promise.all([
        User.deleteMany(),
        Property.deleteMany(),
        CreditCard.deleteMany(),
        Brand.deleteMany(),
        Product.deleteMany(),
        Stock.deleteMany(),
        Order.deleteMany()
    ]))

    .then(() => {
        const agua = new User({ name: 'Agua Cate', email: 'agua@cate.com', password: '123123123' })
        const ora = new User({ name: 'Ora Culo', email: 'ora@culo.com', password: '123123123' })

        return Promise.all([agua.save(), ora.save()])

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
                const skechers = new Brand({ name: 'Skechers' })

                return Promise.all([nike.save(), adidas.save(), skechers.save()])
            })

            .then(([nike, adidas, skechers]) => {
                const airMax = new Product({ brand: nike.id, model: 'Air Max', cost: 100, price: 120, serial: 'NIKE-SERIAL-123123123', image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/04f7ca5f-2412-4511-993c-2e08e542eb33/air-max-90-zapatillas-6SdNzK.png'})
                const jordan = new Product({ brand: nike.id, model: 'Jordan', cost: 110, price: 150, serial: 'NIKE-SERIAL-234234234', image: 'https://images.stockx.com/images/Air-Jordan-5-Retro-Oreo-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1607663973'})
                const airForce = new Product({ brand: nike.id, model: 'Air Force', cost: 110, price: 150, serial: 'NIKE-SERIAL-345345345', image: 'https://hypescrape.com/wp-content/uploads/2021/03/Wethenew-Sneakers-France-Nike-Air-Force-1-_07-White-315115-112-1_2000x_a98317fc-440f-49b4-9155-a5334623e886.png' })


                const nikes = [airMax, jordan, airForce]

                const nizza = new Product({ brand: adidas.id, model: 'Nizza', cost: 100, price: 120, serial: 'ADIDAS-SERIAL-123123123', image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1ef7f87103e24092b27fa89700a8b059_9366/Zapatilla_Nizza_Negro_CQ2332_01_standard.jpg' })
                const gazelle = new Product({ brand: adidas.id, model: 'Gazelle', cost: 110, price: 150, serial: 'ADIDAS-SERIAL-234234234', image:'https://images.footway.com/01/604/60426-41/front/705/705/60426-41.png?auto=format%2Ccompress&dpr=1&fit=max&h=500&ixlib=react-13.0.4' })
                const ultraBoost = new Product({ brand: adidas.id, model: 'Ultra Boost', cost: 110, price: 150, serial: 'ADIDAS-SERIAL-345345345', image:'https://www.sneakersnstuff.com/images/312126/product_xlarge.jpg' })

                const adidass = [nizza, gazelle, ultraBoost]

                const jGoldCrown = new Product({ brand: skechers.id, model: 'JGoldCrown', cost: 100, price: 120, serial: 'SKECHERS-SERIAL-123123123', image: 'https://m.media-amazon.com/images/I/51t3E7PFIzL._AC_UX695_.jpg' })
                const glideStep = new Product({ brand: skechers.id, model: 'Glide Step', cost: 110, price: 150, serial: 'SKECHERS-SERIAL-234234234', image: 'https://image.skechers.com/img/productimages/xlarge/104121_BBK_E.jpg' })


                const skecherss = [jGoldCrown, glideStep]

                return Promise.all([
                    Promise.all(nikes.map(nike => nike.save())),
                    Promise.all(adidass.map(adidas => adidas.save())),
                    Promise.all(skecherss.map(skechers => skechers.save()))
                ])
            })

            .then(([[ airMax, jordan, airForce], [nizza, gazelle, ultraBoost], [jGoldCrown, glideStep]]) => {
                const airMaxBlack42 = new Stock({ product: airMax.id, quantity: 150, color: 'black', size: 42 })
                const airMaxWhite42 = new Stock({ product: airMax.id, quantity: 100, color: 'white', size: 42 })
                const airMaxBlack43 = new Stock({ product: airMax.id, quantity: 100, color: 'black', size: 43 })
                const airMaxWhite43 = new Stock({ product: airMax.id, quantity: 75, color: 'white', size: 43 })

                const jordanOreo41 = new Stock({ product: jordan.id, quantity: 75, color: 'oreo', size: 41 })
                const jordanGold40 = new Stock({ product: jordan.id, quantity: 105, color: 'gold', size: 40 })

                const airForceWhite40 = new Stock({ product: airForce.id, quantity: 105, color: 'white', size: 40 })
                const airForceBlack39 = new Stock({ product: airForce.id, quantity: 75, color: 'white', size: 39 })
                
                const airMaxStocks = [airMaxBlack42, airMaxWhite42, airMaxBlack43, airMaxWhite43]
                const jordanStoks = [jordanOreo41, jordanGold40]
                const airForceStocks = [airForceWhite40, airForceBlack39]

                const nizzaBlack42 = new Stock({ product: nizza.id, quantity: 40, color: 'black', size: 42 })
                const nizzaWhite42 = new Stock({ product: nizza.id, quantity: 50, color: 'white', size: 42 })

                const gazelleBlood39 = new Stock({ product: gazelle.id, quantity: 80, color: 'blood', size: 39 })
                const gazelleBlack40 = new Stock({ product: gazelle.id, quantity: 80, color: 'blood', size: 40 })

                const ultraBoostLego41 = new Stock({ product: ultraBoost.id, quantity: 40, color: 'blood', size: 41 })
                const ultraBoostHeat41 = new Stock({ product: ultraBoost.id, quantity: 40, color: 'blood', size: 41 })

                const nizzasStocks = [nizzaBlack42, nizzaWhite42]
                const gazelleStocks = [gazelleBlood39, gazelleBlack40]
                const ultraBoostStocks = [ultraBoostLego41 ,ultraBoostHeat41]

                const jGoldCrownOreo39 = new Stock({ product: jGoldCrown.id, quantity: 100, color: 'blood', size: 39 })
                const jGoldCrownRoseGold40 = new Stock({ product: jGoldCrown.id, quantity: 80, color: 'blood', size: 40 })
                
                const glideStepgrey40 = new Stock({ product: glideStep.id, quantity: 40, color: 'blood', size: 40 })
                const glideStepblack41 = new Stock({ product: glideStep.id, quantity: 80, color: 'blood', size: 41 })

                const jGoldCrownStocks = [jGoldCrownOreo39, jGoldCrownRoseGold40]
                const glideStepStocks= [glideStepgrey40, glideStepblack41]

                return Promise.all([
                    Promise.all(airMaxStocks.map(stock => stock.save())),
                    Promise.all(jordanStoks.map(stock => stock.save())),
                    Promise.all(airForceStocks.map(stock => stock.save())),
                    Promise.all(nizzasStocks.map(stock => stock.save())),
                    Promise.all(gazelleStocks.map(stock => stock.save())),
                    Promise.all(ultraBoostStocks.map(stock => stock.save())),
                    Promise.all(jGoldCrownStocks.map(stock => stock.save())),
                    Promise.all(glideStepStocks.map(stock => stock.save()))

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


            //.then(() => User.create({ name: 'Agua Cate', email: 'agua@cate.com', password: '123123123'}))
            //.then(() => User.create({ name: 'Ora Culo', email: 'ora@culo.com', password: '123123123'}))

            // .then(() => {
            //     const aguaSave = User.create({ name: 'Agua Cate', email: 'agua@cate.com', password: '123123123'})
            //     const oraSave = User.create({ name: 'Ora Culo', email: 'ora@culo.com', password: '123123123'})

            //     return Promise.all([aguaSave, oraSave])
            // })
            // .then(() => {
            //     const aguaSave = new User({ name: 'Agua Cate', email: 'agua@cate.com', password: '123123123' }).save()
            //     const oraSave = new User({ name: 'Ora Culo', email: 'ora@culo.com', password: '123123123' }).save()

            //     return Promise.all([aguaSave, oraSave])
            // })
           

            // .then(() => User.findById('62161ea9e658c5afa45c4d2b'))
            // .then(user => {
            //     user.name = 'Pepita Grilla'
            //     user.email = 'pepita@grilla.com'

            //     return user.save()
            // })
            // .then(user => User.deleteOne({ _id: user.id }))
            // .then(() => console.log('user deleted'))
        })
            .then(() => disconnect())
            .then(() => console.log('disconnected'))