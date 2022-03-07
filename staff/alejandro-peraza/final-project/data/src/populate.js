const { connect, disconnect } = require('mongoose')
const { User, Recipe, Note } = require('./models')


connect('mongodb://localhost:27017/demo-db')
    .then(() => console.log('connected'))
    .then(() => Promise.all([
        
        User.deleteMany(),
        Recipe.deleteMany(),
        Note.deleteMany()
    ]))

    .then(() => {
        const yeray = new User({ name: 'Yeray Monfor', email: 'yeray@monfor.com', password: '123123123' })
        const abel = new User({ name: 'Abel Lopez', email: 'abel@lopez.com', password: '123123123' })

        return Promise.all([yeray.save(), abel.save()])
    })
    
    .then(() => {
        const whisky = new Recipe({ name: 'Whisky' })
        const whiskey = new Recipe({ name: 'Whiskey' })
        const bourbon = new Recipe({ name: 'Bourbon' })
        const brandy = new Recipe({ name: 'Brandy' })
        const ron = new Recipe({ name: 'Ron' })
        const rum = new Recipe({ name: 'Rum' })
        const rhum = new Recipe({ name: 'Rhum' })
        const vodka = new Recipe({ name: 'Vodka' })
        const tequila = new Recipe({ name: 'Tequila' })
        const vermouth = new Recipe({ name: 'Vermouth' })

        return Promise.all([whisky.save(), whiskey.save(), bourbon.save(), brandy.save(), ron.save(), rum.save(), rhum.save(), vodka.save(), tequila.save(), vermouth.save()])
    })

    .then(() => {
        const aviation = new Recipe({ name: 'Aviation' })
        const negroni = new Recipe({ name: "Negroni" })
        const americano = new Recipe({ name:"Americano" })
        const mojito = new Recipe({ name: 'Mojito' })
        const margarita = new ModernRecipe({ name: 'Margarita' })
        const cosmopolitan = new ModernRecipe({ name: 'Cosmopolitan' })
        const sanFrancisco = new NonAlcoholicRecipe({ name: 'SanFrancisco'})
        const shirleyTemple = new NonAlcoholicRecipe({ name: 'ShirleyTemple' })
        const virginMary = new NonAlcoholicRecipe({ name: 'VirginMary' })

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