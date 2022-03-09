const { connect, disconnect } = require('mongoose')
const { User, Recipe, Note } = require('./models')


connect('mongodb://localhost:27017/cfd-db')
    .then(() => console.log('connected'))
    .then(() => Promise.all([
        
        User.deleteMany(),
        Recipe.deleteMany(),
        Note.deleteMany()
    ]))

    .then(() => {
        const yeray = new User({ name: 'Yeray', email: 'yeray@mail.com', password: '123123123' })
        const abel = new User({ name: 'Abel', email: 'abel@mail.com', password: '123123123' })

        return Promise.all([yeray.save(), abel.save()])
    })
    
    // Review
     // Review
      // Review
       // Review
        // Review
         // Review
          // Review
          
    
    
    .then(() => {
        const whisky = new Recipe({ name: 'Whisky' })
        const bourbon = new Recipe({ name: 'Bourbon' })
        const brandy = new Recipe({ name: 'Brandy' })
        const ron = new Recipe({ name: 'Ron' })
        const vodka = new Recipe({ name: 'Vodka' })
        const tequila = new Recipe({ name: 'Tequila' })
        const vermouth = new Recipe({ name: 'Vermouth' })

        return Promise.all([whisky.save(), bourbon.save(), brandy.save(), ron.save(), vodka.save(), tequila.save(), vermouth.save()])
    })

    .then(() => {
        const aviation = new Recipe({ name: 'Aviation' })
        const negroni = new Recipe({ name: "Negroni" })
        const americano = new Recipe({ name:"Americano" })
        const mojito = new Recipe({ name: 'Mojito' })
        const margarita = new Recipe({ name: 'Margarita' })
        const cosmopolitan = new Recipe({ name: 'Cosmopolitan' })
        const sanFrancisco = new Recipe({ name: 'SanFrancisco'})
        const shirleyTemple = new Recipe({ name: 'ShirleyTemple' })
        const virginMary = new Recipe({ name: 'VirginMary' })

        return Promise.all([aviation.save(), negroni.save(), americano.save(), mojito.save(), margarita.save(), cosmopolitan.save(), sanFrancisco.save(), shirleyTemple.save(), virginMary.save()])
    })

    /*.then(([nike, adidas, converse]) => {
        const airMax = new Product({
          brand: nike.id,
          model: "Air Max",
          cost: 100,
          price: 120,
          serial: "NIKE-SERIAL-123123123",
          image:
            "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/04f7ca5f-2412-4511-993c-2e08e542eb33/air-max-90-zapatillas-6SdNzK.png",
        });*/
    

    .then(() => disconnect())
    .then(() => console.log('disconnected'))