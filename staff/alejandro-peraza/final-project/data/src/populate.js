const { connect, disconnect } = require('mongoose')
const { User, Recipe, Comment } = require('./models')

connect('mongodb://localhost:27017/cfd-db')
    .then(() => console.log('connected'))
    .then(() => Promise.all([    
        User.deleteMany(),
        Recipe.deleteMany(),
        Comment.deleteMany()
    ]))

    .then(() => {
        const yeray = new User({ name: 'Yeray', email: 'yeray@mail.com', password: '123123123' })
        const abel = new User({ name: 'Abel', email: 'abel@mail.com', password: '123123123' })

        return Promise.all([yeray.save(), abel.save()])
    })
    
    .then(() => {
        const whisky = new Recipe({ 
            title: 'Whisky', 
            description: 'blah blah', 
            image: 'https://image.com', 
            distilled: 'whisky' 
        })
        const bourbon = new Recipe({ title: 'Bourbon', description: 'blah blah', image: 'https://image.com' })
        const brandy = new Recipe({ title: 'Brandy', description: 'blah blah', image: 'https://image.com' })
        const ron = new Recipe({ title: 'Ron', description: 'blah blah', image: 'https://image.com' })
        const vodka = new Recipe({ title: 'Vodka', description: 'blah blah', image: 'https://image.com' })
        const tequila = new Recipe({ title: 'Tequila', description: 'blah blah', image: 'https://image.com' })
        const vermouth = new Recipe({ title: 'Vermouth', description: 'blah blah', image: 'https://image.com' })

        const aviation = new Recipe({ title: 'Aviation', description: 'blah blah', image: 'https://image.com' })
        const negroni = new Recipe({ title: "Negroni", description: 'blah blah', image: 'https://image.com' })
        const americano = new Recipe({ title:"Americano", description: 'blah blah', image: 'https://image.com' })
        const mojito = new Recipe({ title: 'Mojito', description: 'blah blah', image: 'https://image.com' })
        const margarita = new Recipe({ title: 'Margarita', description: 'blah blah', image: 'https://image.com' })
        const cosmopolitan = new Recipe({ title: 'Cosmopolitan', description: 'blah blah', image: 'https://image.com' })
        const sanFrancisco = new Recipe({ title: 'SanFrancisco', description: 'blah blah', image: 'https://image.com'})
        const shirleyTemple = new Recipe({ title: 'ShirleyTemple', description: 'blah blah', image: 'https://image.com' })
        const virginMary = new Recipe({ title: 'VirginMary', description: 'blah blah', image: 'https://image.com' })

        return Promise.all([
            whisky.save(), 
            bourbon.save(), 
            brandy.save(), 
            ron.save(), 
            vodka.save(), 
            tequila.save(), 
            vermouth.save(),
            aviation.save(), negroni.save(), americano.save(), mojito.save(), margarita.save(), cosmopolitan.save(), sanFrancisco.save(), shirleyTemple.save(), virginMary.save()
        ])
    })

    /*.then(([nike, adidas, converse]) => {
        const airMax = new Product({
          brand: nike.id,
          model: "Air Max",
          cost: 100,
          price: 120,
          serial: "NIKE-SERIAL-123123123",
          image:
            "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/04f7ca5f-2412-4511-993c-2e08e542eb33/air-maxno-90-zapatillas-6SdNzK.png",
        });*/
    

    .then(() => disconnect())
    .then(() => console.log('disconnected'))