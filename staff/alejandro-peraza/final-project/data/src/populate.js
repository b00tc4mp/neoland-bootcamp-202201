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
        const oldFashioned = new Recipe({ 
            title: 'Old-Fashioned', 
            description: 'blah blah', 
            image: 'https://image.com',
            type: 'classic',
            distilled: 'whisky' 
        })
        const manhattan = new Recipe({ 
            title: 'Manhattan', 
            description: 'blah blah', 
            image: 'https://image.com',
            type: 'classic',
            distilled: 'whisky' 
        })
        
        const negroni = new Recipe({ 
            title: 'Americano', 
            description: 'blah blah', 
            image: 'https://image.com',
            type: 'classic',
            distilled: 'gin' 
        })
        const aviation = new Recipe({ 
            title: 'Aviation', 
            description: 'blah blah', 
            image: 'https://image.com',
            type: 'classic',
            distilled: 'gin' 
        })
        const paradise = new Recipe({ 
            title: 'Paradise', 
            description: 'blah blah', 
            image: 'https://image.com',
            type: 'classic',
            distilled: 'gin' 
        })
        const sidecar = new Recipe({ 
            title: 'Sidecar', 
            description: 'blah blah', 
            image: 'https://image.com',
            type: 'classic',
            distilled: 'brandy' 
        })
        const sazerac = new Recipe({ 
            title: 'Sazerac', 
            description: 'blah blah', 
            image: 'https://image.com',
            type: 'classic',
            distilled: 'brandy' 
        })
        const daiquiri = new Recipe({ 
            title: 'Daiquiri', 
            description: 'blah blah', 
            image: 'https://image.com',
            type: 'classic',
            distilled: 'ron' 
        })
        const maitai = new Recipe({ 
            title: 'Mai-Tai', 
            description: 'blah blah', 
            image: 'https://image.com',
            type: 'classic',
            distilled: 'ron' 
        })
        const moscowMule = new Recipe({ 
            title: 'Moscow Mule', 
            description: 'blah blah', 
            image: 'https://image.com',
            type: 'classic',
            distilled: 'vodka' 
        })
        const margarita = new Recipe({ 
            title: 'Margarita', 
            description: 'blah blah', 
            image: 'https://image.com',
            type: 'classic',
            distilled: 'tequila' 
        })
        const sunrise = new Recipe({ 
            title: 'Sunrise', 
            description: 'blah blah', 
            image: 'https://image.com',
            type: 'classic',
            distilled: 'tequila' 
        })
        const tipperary = new Recipe({ 
            title: 'Tipperary', 
            description: 'blah blah', 
            image: 'https://image.com',
            type: 'modern',
            distilled: 'whisky' 
        })
        const whiskySour = new Recipe({ 
            title: 'Whisky Sour', 
            description: 'blah blah', 
            image: 'https://image.com',
            type: 'modern',
            distilled: 'whisky' 
        })
        const bramble = new Recipe({ 
            title: 'Bramble', 
            description: 'blah blah', 
            image: 'https://image.com',
            type: 'modern',
            distilled: 'gin' 
        })
        const beeknees = new Recipe({ 
            title: 'Bee Knees', 
            description: 'blah blah', 
            image: 'https://image.com',
            type: 'modern',
            distilled: 'gin' 
        })
        const mojito = new Recipe({ 
            title: 'Mojito', 
            description: 'blah blah', 
            image: 'https://image.com',
            type: 'modern',
            distilled: 'ron' 
        })
        const piñaColada = new Recipe({ 
            title: 'Piña Colada', 
            description: 'blah blah', 
            image: 'https://image.com',
            type: 'modern',
            distilled: 'ron' 
        })
        const caipiroska = new Recipe({ 
            title: 'Caipiroska', 
            description: 'blah blah', 
            image: 'https://image.com',
            type: 'modern',
            distilled: 'vodka' 
        })
        const cosmopolitan = new Recipe({ 
            title: 'Cosmopolitan', 
            description: 'blah blah', 
            image: 'https://image.com',
            type: 'modern',
            distilled: 'vodka' 
        })
        const paloma = new Recipe({ 
            title: 'Paloma', 
            description: 'blah blah', 
            image: 'https://image.com',
            type: 'modern',
            distilled: 'tequila' 
        })
        const nakedAndFamous = new Recipe({ 
            title: 'Naked and Famous', 
            description: 'blah blah', 
            image: 'https://image.com',
            type: 'modern',
            distilled: 'tequila' 
        })
        const virginMary = new Recipe({ 
            title: 'Virgin Mary', 
            description: 'blah blah', 
            image: 'https://image.com',
            type: 'non-alcoholic',
            distilled: 'none' 
        })
        const sanFrancisco = new Recipe({ 
            title: 'San Francisco', 
            description: 'blah blah', 
            image: 'https://image.com',
            type: 'non-alcoholic',
            distilled: 'none' 
        })
        const shirleyTemple = new Recipe({ 
            title: 'Shirley Temple', 
            description: 'blah blah', 
            image: 'https://image.com',
            type: 'non-alcoholic',
            distilled: 'none' 
        })
        const mintTonic = new Recipe({ 
            title: 'Mint Tonic', 
            description: 'blah blah', 
            image: 'https://image.com',
            type: 'non-alcoholic',
            distilled: 'none' 
        })
        const tropicalLove = new Recipe({ 
            title: 'Tropical Love', 
            description: 'blah blah', 
            image: 'https://image.com',
            type: 'non-alcoholic',
            distilled: 'none' 
        })
        const freeFizz = new Recipe({ 
            title: 'Free Fizz', 
            description: 'blah blah', 
            image: 'https://image.com',
            type: 'non-alcoholic',
            distilled: 'none' 
        })

        return Promise.all([
            oldFashioned.save(),
            manhattan.save(),
            negroni.save(), 
            aviation.save(), 
            paradise.save(),
            sidecar.save(),
            sazerac.save(),
            daiquiri.save(),
            maitai.save(),
            moscowMule.save(),
            margarita.save(), 
            sunrise.save(),
            tipperary.save(),
            whiskySour.save(),
            bramble.save(),
            beeknees.save(),
            mojito.save(), 
            piñaColada.save(),
            caipiroska.save(),
            cosmopolitan.save(), 
            paloma.save(),
            nakedAndFamous.save(),
            virginMary.save(),
            sanFrancisco.save(), 
            shirleyTemple.save(), 
            mintTonic.save(),
            tropicalLove.save(),
            freeFizz.save()
            
        ])
    })

    .then(() => disconnect())
    .then(() => console.log('disconnected'))