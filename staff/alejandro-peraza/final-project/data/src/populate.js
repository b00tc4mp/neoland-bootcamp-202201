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
    
    .then(() => {
        const oldFashioned = new Recipe({ 
            title: 'Old-Fashioned', 
            description: '45 ml Bourbon or Rye Whiskey, 1 Sugar Cube, Few Dashes Angostura Bitters, Few Dashes Plain Water', 
            image: 'https://iba-world.com/wp-content/uploads/2021/02/IBA-TU-21-Old-Fashioned.jpg',
            type: 'classic',
            distilled: 'whisky' 
        })
        const manhattan = new Recipe({ 
            title: 'Manhattan', 
            description: '50 ml Rye Whiskey, 20 ml Sweet Red Vermouth, 1 dash Angostura Bitters', 
            image: 'https://iba-world.com/wp-content/uploads/2021/02/IBA-TU-16-Manhattan.jpg',
            type: 'classic',
            distilled: 'whisky' 
        })
        
        const negroni = new Recipe({ 
            title: 'Americano', 
            description: '30 ml Bitter Campari, 30 ml Sweet Red Vermouth,A splash of Soda Water', 
            image: 'https://iba-world.com/wp-content/uploads/2021/02/IBA-TU-02-Americano.jpg',
            type: 'classic',
            distilled: 'gin' 
        })
        const aviation = new Recipe({ 
            title: 'Aviation', 
            description: '45 ml Gin, 15 ml Maraschino Luxardo, 15 ml Fresh Lemon Juice, 1 Bar Spoon Crème de Violette', 
            image: 'https://iba-world.com/wp-content/uploads/2021/02/IBA-TU-04-Aviation.jpg',
            type: 'classic',
            distilled: 'gin' 
        })
        const paradise = new Recipe({ 
            title: 'Paradise', 
            description: '30 ml Gin, 20 ml Apricot Brandy, 15 ml Fresh Orange Juice', 
            image: 'https://iba-world.com/wp-content/uploads/2021/02/IBA-TU-22-Paradise.jpg',
            type: 'classic',
            distilled: 'gin' 
        })
        const sidecar = new Recipe({ 
            title: 'Sidecar', 
            description: '50 ml Cognac, 20 ml Triple Sec, 20 ml Fresh Lemon Juice', 
            image: 'https://iba-world.com/wp-content/uploads/2021/02/IBA-TU-28-Side-Car-1.jpg',
            type: 'classic',
            distilled: 'brandy' 
        })
        const sazerac = new Recipe({ 
            title: 'Sazerac', 
            description: '50 ml Cognac, 10 ml Absinthe, 1 Sugar Cube, 2 Dashes Peychaud’s Bitters', 
            image: 'https://iba-world.com/wp-content/uploads/2021/02/IBA-TU-27-Sazerac.jpg',
            type: 'classic',
            distilled: 'brandy' 
        })
        const daiquiri = new Recipe({ 
            title: 'Daiquiri', 
            description: '60 ml White Cuban Ron, 20 ml Fresh Lime Juice, 2 Bar Spoons Superfine Sugar', 
            image: 'https://iba-world.com/wp-content/uploads/2021/02/IBA-TU-10-Daiquiri.jpg',
            type: 'classic',
            distilled: 'ron' 
        })
        const maitai = new Recipe({ 
            title: 'Mai-Tai', 
            description: '30 ml Amber Jamaican Rum, 30 ml Martinique Rhum, 15 ml Orange Curacao, 15 ml Orgeat Syrup (Almond), 30 ml Fresh Lime Juice, 7.5 ml Simple Syrup', 
            image: 'https://iba-world.com/wp-content/uploads/2021/02/IBA-CC-18-Mai-Tai-scaled.jpg',
            type: 'classic',
            distilled: 'ron' 
        })
        const moscowMule = new Recipe({ 
            title: 'Moscow Mule', 
            description: '45 ml Smirnoff Vodka, 120 ml Ginger Beer, 10 ml Fresh lime juice', 
            image: 'https://iba-world.com/wp-content/uploads/2021/02/IBA-CC-23-Moscow-Mule-scaled.jpg',
            type: 'classic',
            distilled: 'vodka' 
        })
        const margarita = new Recipe({ 
            title: 'Margarita', 
            description: '50 ml Tequila 100% Agave, 20 ml Triple Sec, 15 ml Freshly Squeezed Lime Juice', 
            image: 'https://iba-world.com/wp-content/uploads/2021/02/IBA-CC-19-Margarita-1-scaled.jpg',
            type: 'classic',
            distilled: 'tequila' 
        })
        const sunrise = new Recipe({ 
            title: 'Sunrise', 
            description: '45ml Tequila, 90 ml Fresh Orange Juice, 15 ml Grenadine Syrup', 
            image: 'https://iba-world.com/wp-content/uploads/2021/02/IBA-CC-29-Tequila-Sunrise-scaled.jpg',
            type: 'classic',
            distilled: 'tequila' 
        })
        const tipperary = new Recipe({ 
            title: 'Tipperary', 
            description: '50 ml Irish Whiskey, 25 ml Sweet Red Vermouth, 15 ml Green Chartreuse, 2 Dashes Angostura Bitters', 
            image: 'https://iba-world.com/wp-content/uploads/2021/02/IBA-NE-22-Tipperary.jpg',
            type: 'modern',
            distilled: 'whisky' 
        })
        const whiskySour = new Recipe({ 
            title: 'Whisky Sour', 
            description: '45 ml Bourbon Whiskey, 25 ml Fresh Lemon Juice, 20 ml Sugar Syrup, 20 ml Egg White', 
            image: 'https://iba-world.com/wp-content/uploads/2021/02/IBA-TU-32-Whiskey-Sour.jpg',
            type: 'modern',
            distilled: 'whisky' 
        })
        const bramble = new Recipe({ 
            title: 'Bramble', 
            description: '50 ml Gin, 25 ml Fresh Lemon Juice, 12,5 ml Sugar Syrup, 15 ml Crème de Mûre', 
            image: 'https://iba-world.com/wp-content/uploads/2021/02/IBA-NE-02-Bramble.jpg',
            type: 'modern',
            distilled: 'gin' 
        })
        const beeknees = new Recipe({ 
            title: 'Bee Knees', 
            description: '52.5 ml Dry Gin, 2 teaspoons Honey Syrup, 22.5 ml Fresh Lemon Juice, 22.5 ml Fresh Orange Juice', 
            image: 'https://iba-world.com/wp-content/uploads/2021/02/IBA-NE-03-Bees-Knees.jpg',
            type: 'modern',
            distilled: 'gin' 
        })
        const mojito = new Recipe({ 
            title: 'Mojito', 
            description: '45 ml White Cuban Ron, 20 ml  Fresh Lime Juice, 6 pcs Mint Sprigs, 2 tsp White Cane Sugar, Soda Water', 
            image: 'https://iba-world.com/wp-content/uploads/2021/02/IBA-CC-22-Mojito-scaled.jpg',
            type: 'modern',
            distilled: 'ron' 
        })
        const piñaColada = new Recipe({ 
            title: 'Piña Colada', 
            description: '50 ml White Rum, 30 ml Coconut Cream, 50 ml Fresh Pineapple Juice', 
            image: 'https://iba-world.com/wp-content/uploads/2021/02/IBA-CC-24-Pina-Colada-scaled.jpg',
            type: 'modern',
            distilled: 'ron' 
        })
        const caipiroska = new Recipe({ 
            title: 'Caipiroska', 
            description: '60 ml Vodka, 1 Lime cut into small wedges, 4 Teaspoons White Cane Sugar', 
            image: 'https://iba-world.com/wp-content/uploads/2021/02/IBA-CC-04-Caipirinha-scaled.jpg',
            type: 'modern',
            distilled: 'vodka' 
        })
        const cosmopolitan = new Recipe({ 
            title: 'Cosmopolitan', 
            description: '40 ml Vodka Citron, 15 ml Cointreau, 15 ml Fresh Lime Juice, 30 ml Cranberry Juice', 
            image: 'https://iba-world.com/wp-content/uploads/2021/02/IBA-CC-06-Cosmopolitan-scaled.jpg',
            type: 'modern',
            distilled: 'vodka' 
        })
        const paloma = new Recipe({ 
            title: 'Paloma', 
            description: '50 ml 100% Agave Tequila, 5 ml Fresh lime, A pinch of Salt, 100 ml Pink Grapefruit Soda', 
            image: 'https://iba-world.com/wp-content/uploads/2021/02/IBA-NE-14-Paloma.jpg',
            type: 'modern',
            distilled: 'tequila' 
        })
        const nakedAndFamous = new Recipe({ 
            title: 'Naked and Famous', 
            description: '22.5 ml Mezcal, 22.5 ml Yellow Chartreuse, 22.5 ml Aperol, 22.5 ml Fresh Lime Juice', 
            image: 'https://iba-world.com/wp-content/uploads/2021/02/IBA-NE-11-Naked-and-Famous.jpg',
            type: 'modern',
            distilled: 'tequila' 
        })
        const virginMary = new Recipe({ 
            title: 'Virgin Mary', 
            description: '90 ml Tomato Juice, 15 ml Fresh Lemon Juice, 2 dashes Worcestershire Sauce, Tabasco, Celery Salt, Pepper (Up to taste)', 
            image: 'https://iba-world.com/wp-content/uploads/2021/02/IBA-CC-03-Bloody-Marry-scaled.jpg',
            type: 'non-alcoholic',
            distilled: 'none' 
        })
        const sanFrancisco = new Recipe({ 
            title: 'San Francisco', 
            description: '40 ml Peach Juice, 40 ml Fresh Orange Juice, 40 ml PineApple Juice, 15 ml Grenadine ', 
            image: 'https://iba-world.com/wp-content/uploads/2021/02/IBA-CC-27-Sex-On-The-Beach-scaled.jpg',
            type: 'non-alcoholic',
            distilled: 'none' 
        })
        const shirleyTemple = new Recipe({ 
            title: 'Shirley Temple', 
            description: '330 ml Ginger Ale, 15 ml Grenadine, 2 Maraschino Cherries, 1 Orange Slice', 
            image: 'https://iba-world.com/wp-content/uploads/2021/02/IBA-CC-26-Sea-Breeze-scaled.jpg',
            type: 'non-alcoholic',
            distilled: 'none' 
        })
        const mintTonic = new Recipe({ 
            title: 'Mint Tonic', 
            description: '4 fresh Mint sprigs, 15ml Mint Syrup, 15 ml Fresh Lemon Juice, Tonic Water, 1 tsp Powdered Sugar', 
            image: 'https://iba-world.com/wp-content/uploads/2021/02/IBA-CC-21-Mint-Julep-scaled.jpg',
            type: 'non-alcoholic',
            distilled: 'none' 
        })
        const tropicalLove = new Recipe({ 
            title: 'Tropical Love', 
            description: '50 ml Passion Fruit Juice, 30 ml Sour Cherry Juice, 20 ml Pineapple Juice, Tonic Water', 
            image: 'https://iba-world.com/wp-content/uploads/2021/02/IBA-CC-28-Singapore-Sling-scaled.jpg',
            type: 'non-alcoholic',
            distilled: 'none' 
        })
        const freeFizz = new Recipe({ 
            title: 'Free Fizz', 
            description: '50 ml Soda, 4-5 slices of muddled cucumber, 1 oz fresh lime juice, 1 oz simple syrup', 
            image: 'https://iba-world.com/wp-content/uploads/2021/02/IBA-NE-13-Old-Cuban.jpg',
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