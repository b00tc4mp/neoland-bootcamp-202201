const { connect, disconnect } = require('mongoose')
const { User, Racket, Brand, Comment} = require('./models')


let users 

connect('mongodb://localhost:27017/racketMatch-db')
    .then(() => console.log('connected'))
    .then(() => Promise.all([
        User.deleteMany(),
        Racket.deleteMany(),
        Comment.deleteMany(),
        Brand.deleteMany(),
    ]))

    .then(() => {
        const agua = new User({ name: 'Agua Cate', email: 'agua@cate.com', password: '123123123' })
        const ora = new User({ name: 'Ora Culo', email: 'ora@culo.com', password: '123123123' })

        return Promise.all([agua.save(), ora.save()])

            
            .then(_users => {
                users = _users
                const head = new Brand({ name: 'Head' })
                const adidas = new Brand({ name: 'Adidas' })

                return Promise.all([head.save(), adidas.save()])
            })

            .then(([head, adidas ]) => {
               
                const alpha = new Racket({ brand: head.id, model: 'alpha', type: 'control', weight: 360, player: 'aereo',  price: 218, nivel: 'avanzado ', description: 'Con un formato de lágrima y un balance centrado supone una opción ideal para aquellos jugadores de nivel avanzado que buscan una pala polivalente que tenga una gran relación entre potencia y control', image: 'https://www.padelnuestro.com/images/cargador/productos/imagen-1-21814-42210f7e-23406-NORMAL.jpg'})

                const metalbone = new Racket({ brand: adidas.id, model: 'metalbone 3.1', type: 'potencia',  weight: 360, player: 'tecnico', price: 318, nivel: 'avanzado ', description: 'Con forma de diamante, esta raqueta descubre otra dimensión en el pádel gracias a la posibilidad de personalizar el peso y el balance según las exigencias de cada partido. Con esta raqueta podrás marcar la diferencia en los golpes de ataque gracias a la potencia. Perfil del jugador: Raqueta diseñada para jugadores de nivel profesional o avanzado que desarrollan un juego de ataque basado en la potencia.', image: 'https://www.padelnuestro.com/images/cargador/productos/imagen-1-25653-0faf6c8f-26849-NORMAL.jpg'})

                return Promise.all([ alpha.save(), metalbone.save()])
            })

            .then(rackets => {
                const [alpha, metalbone] = rackets

                const [ agua, ora] = users

                const alphaComment = new Comment({ user: agua.id, text: 'increible pala, con mucho control, desde la primera vez que la use la he hecho mia!!'})
                alpha.comments.push(alphaComment)

                const metalboneComment = new Comment({ user: ora.id, text: 'una pala muy técnica, y muy rugosa, no esta hecha para todo el mundo '})
                metalbone.comments.push(metalboneComment)


                return Promise.all([alpha.save(), metalbone.save()])
            })

            /* 

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
            // .then(() => console.log('user deleted'))*/
        }) 
            .then(() => disconnect())
            .then(() => console.log('disconnected'))