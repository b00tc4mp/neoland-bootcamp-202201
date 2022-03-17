const { connect, disconnect } = require('mongoose')
const { User, Racket, Brand, Comment } = require('./models')

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
                const starvie = new Brand({ name: 'Starvie' })
                const bullpadel = new Brand({ name: 'Bullpadel' })
                const asics = new Brand({ name: 'Asics' })
                const babolat = new Brand({ name: 'Babolat' })

                return Promise.all([head.save(), adidas.save(), starvie.save(), bullpadel.save(), asics.save(), babolat.save()])
            })

            .then(([head, adidas, starvie, bullpadel, asics, babolat]) => {

                const alpha = new Racket({
                    brand: head.id,
                    model: 'Alpha',
                    type: 'Hybrida',
                    weight: '360-370g',
                    player: 'Defensivo',
                    price: 305,
                    level: 'Avanzado',
                    description: 'Con un formato de lágrima y un balance centrado supone una opción ideal para aquellos jugadores de nivel avanzado que buscan una pala polivalente que tenga una gran relación entre potencia y control, un manejo fácil de la pala. Un punto dulce ampolio y con toque muy agradable.',
                    image: 'https://www.padelnuestro.com/images/cargador/productos/imagen-1-21814-42210f7e-23406-NORMAL.jpg'
                })

                const belaX = new Racket({
                    brand: head.id,
                    model: 'Bela X',
                    type: 'Potencia',
                    weight: '360-370g',
                    player: 'Defensivo',
                    price: 159,
                    level: 'Avanzado',
                    description: 'Es una pala con un diseñado para jugadores de nivel avanzado con mucha experiencia que busca más comodidad en la defensa y mucha potencia en los ataques, ya que por su formato el jugador consigue mayor pegada sin que se pierda el control en la técnica ni en la bola.',
                    image: 'https://www.ofertasdepadel.com/23051-large_default/pala-head-graphene-360-bela-x.jpg'
                
                })

                const heads = [alpha, belaX]

                const astrumEris = new Racket({
                    brand: starvie.id,
                    model: 'Astrum Eris',
                    type: 'Control',
                    weight: '350-360g',
                    player: 'Ofensivo',
                    price: 218,
                    level: 'Intermedio',
                    description: 'Presenta una forma redonda, en la cual su punto óptimo se encuentra en el centro del plano y la densidad de su Goma Soft V30 contribuye a lograr mayor velocidad de bola y facilidad en la ejecución del golpe.',
                    image: 'https://www.padelnuestro.com/images/cargador/productos/imagen-1-26518-beab4499-28653-NORMAL.jpg'
                })

                const raptor = new Racket({
                    brand: starvie.id,
                    model: 'Raptor',
                    type: 'Control',
                    weight: '360-370g',
                    player: 'Ofensivo',
                    price: 218,
                    level: 'Intermedio',
                    description: 'Una pala de alto rendimiento para jugadores con un nivel alto en pista. Incorpora el Raptor Core en el corazón de la pala para optimizar el balance y ofrecer mayor rigidez en esa zona. Se trata de una pala resistente gracias a sus materiales en el marco y cara de carbono. Está diseñada en forma redonda con un balance medio-bajo , además incorpora un relieve del plano rugoso que ofrece mayor precisión a la hora de dar efecto a la bola y su molde ayuda a optimizar y controlar los movimientos de la pala durante el juego.',
                    image: 'https://www.padelnuestro.com/images/cargador/productos/imagen-1-21822-15832805-23443-NORMAL.jpg'
                })

                const triton = new Racket({
                    brand: starvie.id,
                    model: 'Triton',
                    type: 'Potencia',
                    weight: '350-360g',
                    player: 'Ofensivo',
                    price: 218,
                    level: 'Avanzado',
                    description: 'Ligera, resuelta y dinámica en los golpes de ataque más ofensivos, de alto rendimiento y mejores prestaciones. ha sido concebida para jugadores de nivel avanzado y experto que buscan una pala de alto rendimiento y gran potencial. Esta pala de pádel se comporta de manera perfecta en el juego ofensivo, sobre todo cerca de la red en golpes potentes que requieran mayor fuerza y energía, como los remates. No obstante, también nos va a ayuda a defendernos en el fondo de la pista.',
                    image: 'https://www.starvie.com/pub/media/catalog/product/cache/92e02d4fcb922518df48587d336998ac/p/a/pala_de_padel_triton_2021_starvie.main_1.jpg'
                })

                const metheora = new Racket({
                    brand: starvie.id,
                    model: 'Metheora',
                    type: 'Control',
                    weight: '350-360g',
                    player: 'Ofensivo',
                    price: 229,
                    level: 'Intermedio',
                    description: 'Es un modelo dirigido a jugadores de nivel intermedio y avanzado que buscan una pala muy balanceada al centro del plano, con sensaciones de goma blanda, pero con un punto de rigidez en el plano gracias a la rugosidad del mismo. Su forma de lagrima con la cabeza redondeada crea una sensación de control y total manejabilidad de la bola, pero con un punto de potencia',
                    image: 'https://www.starvie.com/pub/media/catalog/product/cache/6393814e440866be23189027a939d0e2/p/a/pala_de_padel_metheora_warrior_2021_starvie.main.jpg'
                })

                const starvies = [astrumEris, raptor, triton, metheora]

                const adipower = new Racket({
                    brand: adidas.id,
                    model: 'Adipower light 3.0',
                    type: 'Control',
                    weight: '345-350g',
                    player: 'Defensivo',
                    price: 154,
                    level: 'Intermedio',
                    description: 'Para jugadores que buscan golpes controlados y precisos en todo momento. Su forma es redonda, con un balance bajo y un peso aproximado entre los 345-360 gramos, ideal para conseguir mayor manejabilidad y equilibrio. Cuenta con un amplio punto dulce al centro que favorece las salidas de la bola. Además es una pala indicada a los jugadores que tengan problemas de codo.',
                    image: 'https://www.padelnuestro.com/images/cargador/productos/imagen-1-21767-e5332038-23356-NORMAL.jpg'
                })

                const metalbone = new Racket({
                    brand: adidas.id,
                    model: 'Metalbone 3.1',
                    type: 'Potencia',
                    weight: '360-370g',
                    player: 'Ofensivo',
                    price: 318,
                    level: 'Avanzado',
                    description: 'Con forma de diamante, esta raqueta descubre otra dimensión en el pádel gracias a la posibilidad de personalizar el peso y el balance según las exigencias de cada partido. Con esta raqueta podrás marcar la diferencia en los golpes de ataque gracias a la potencia. Perfil del jugador: Raqueta diseñada para jugadores de nivel profesional o avanzado que desarrollan un juego de ataque basado en la potencia.',
                    image: 'https://www.padelnuestro.com/images/cargador/productos/imagen-1-25653-0faf6c8f-26849-NORMAL.jpg'
                })

                const driveEvo = new Racket({
                    brand: adidas.id,
                    model: 'Drive Evo',
                    type: 'Control',
                    weight: '345-350g',
                    player: 'Defensivo',
                    price: 154,
                    level: 'Principiante',
                    description: 'Con forma redonda, esta pala crea una sensación de control y confort muy buena en la pista. Perfecta para personas que estan empezando a jugar a padel con un nivel de iniciación. Gracias al peso ligero que tiene la pala se hace muy manejable y sencilla de llevar.',
                    image: 'https://www.ofertasdepadel.com/11343-large_default/pala-de-padel-adidas-drive-woman-evo-2017.jpg'
                })

                const adidass = [adipower, metalbone, driveEvo]

                const vertex3Woman = new Racket({
                    brand: bullpadel.id,
                    model: 'Vertex 3 woman',
                    type: 'Potencia',
                    weight: '350-360g',
                    player: 'Defensivo',
                    price: 199,
                    level: 'Avanzado',
                    description: 'Es una pala que presenta un diseño espectacular construido en un molde diamante y estética elegante. Con ella conseguirás una mejor potencia, gran rendimiento y buen control de los golpeos. ncorpora un núcleo de goma Multieva y ofrece una espectacular velocidad en la salida de bola gracias al sistema Air React Channel, lo que proporciona una mayor precisión en el golpeo.',
                    image: 'https://www.padelnuestro.com/images/cargador/productos/imagen-1-21708-d2cead55-23315-NORMAL.jpg'

                })

                const vertex3Comfort = new Racket({
                    brand: bullpadel.id,
                    model: 'Vertex 3 Comfort',
                    type: 'Hybrida',
                    weight: '360-370g',
                    player: 'Ofensivo',
                    price: 189,
                    level: 'Avanzado',
                    description: 'Utiliza un molde diamante, muy agresivo que permite imprimir la máxima potencia en todos nuestros golpes. Cuenta con un marco carbon Tube 100% de carbono, para mejorar la resistencia y durabilidad de la pala. Además, los planos de fibra híbrida Fibrix, que consiguen un tacto más cómodo y mayor salida de bola, incorporan el sistema Topspin, que aumenta los efectos y golpes cotados. Para el núcleo Bullpadel ha elegido la goma Multieva, una goma de gran potencia y control con un tacto medio que le sienta de maravilla.',
                    image: 'https://mundosports.es/7822-thickbox_default/bullpadel-vertex-3-comfort-21-juan-tello.jpg'

                })

                const flow = new Racket({
                    brand: bullpadel.id,
                    model: 'Flow',
                    type: 'Hybrida',
                    weight: '345-350g',
                    player: 'Defensivo',
                    price: 195,
                    level: 'Intermedio',
                    description: 'Una pala concebida en forma de lagrima, destaca su ligereza con un peso que oscila de los 345 y 360 gramos. Sus materiales y tecnologías ofrecen un cómodo y más sencillo manejo de la pala, permitiendo una buena adaptación a jugadoras intermedias que quieren subir de nivel. Es una pala hybrida con potencia, ligera, cómoda y sin perdida de control.',
                    image: 'https://www.padelnuestro.com/images/cargador/productos/imagen-1-26108-01fbc18d-27098-NORMAL.jpg'
                })

                const vertex3Control = new Racket({
                    brand: bullpadel.id,
                    model: 'Vertex 3 Control',
                    type: 'Control',
                    weight: '360-370g',
                    player: 'Defensivo',
                    price: 219,
                    level: 'Avanzado',
                    description: 'Una pala con un sobresaliente control gracias a la combinación de la goma Multieva y el carbono XTend 12K que le confiere una salida de bola ajustada. Su forma redonda es una excelente aliada en la defensa en fondo de pista, con su balance bajo, recuperando bolas rápidas y enterradas para conseguir una transición defensa ataque y dominar el punto.',
                    image: 'https://padeli.es/68-thickbox_default/bullpadel-vertex-03-ctrl-21.jpg'
                })

                const bullpadels = [vertex3Woman, vertex3Comfort, flow, vertex3Control]

                const asicsHybrid = new Racket({
                    brand: asics.id,
                    model: 'Asics Hybrid Pro',
                    type: 'Hybrida',
                    weight: '350-360g',
                    player: 'Ofensivo',
                    price: 113,
                    level: 'Intermedio',
                    description: 'Una pala de pádel polivalente hecha para los jugadores con un nivel de juego intermedio hasta avanzado. Compuesta con una estructura 100% de fibra de vidrio y refuerzos que consiguen mayor consistencia y estabilidad, es una pala en forma de lágrima con un amplio punto dulce. El núcleo de goma FOAM mejora las salidas de la pala, mientras su balance medio, ayuda a conseguir el equilibrio perfecto entre potencia y control.',
                    image: 'https://www.padelnuestro.com/images/cargador/productos/imagen-1-22103-1d31c021-23845-NORMAL.jpg'
                })

                const asicsControl = new Racket({
                    brand: asics.id,
                    model: 'Asics Control Pro',
                    type: 'Control',
                    weight: '360-370g',
                    player: 'Defensivo',
                    price: 174,
                    level: 'Principiante',
                    description: 'Una pala redonda de control fabricada con los mejores materiales, de balance bajo, perfecta para los jugadores que busquen la máxima precisión y efecto en sus golpes. Una pala con mucha manejabilidad y control a la que es fácil de adaptarse, por ello es buena para cualquier jugador ya sea principiante o avanzado.',
                    image: 'https://padelzoom.es/wp-content/themes/busolightning/images/palas-imagenes/Asics/asics-control-pro-2019.jpg'
                })

                const asicsSpeed = new Racket({
                    brand: asics.id,
                    model: 'Asics Speed Pro Lima',
                    type: 'Potencia',
                    weight: '360-370g',
                    player: 'Ofensivo',
                    price: 224,
                    level: 'Intermedio',
                    description: 'Fabricado con una forma de diamante y con un balance alto hacia la cabeza. Todo aquel jugador que busque la velocidad en su juego tiene en la Speed Lima su pala ideal. Este podrá ser todo lo agresivo que quiera tanto a la hora de atacar como de defender. Dentro de la colección de palas asics pro no encontrarás otra pala más potente, con una buena salida de bola.',
                    image: 'https://www.ofertasdepadel.com/20874-large_default/pala-asics-speed-pro-2019.jpg'
                })

                const asicss = [asicsHybrid, asicsControl, asicsSpeed]

                const babolatTechnicalViper = new Racket({
                    brand: babolat.id,
                    model: 'Babolat Technical Viper',
                    type: 'Potencia',
                    weight: '360-370g',
                    player: 'Ofensivo',
                    price: 294,
                    level: 'Avanzado',
                    description: 'Fabricado con una forma de diamante y con un balance alto hacia la cabeza. Es una pala que destaca sin duda alguna por su potencia, pero también debemos decir destacar su precisión en cada remate. está diseñada para ofrecer el mejor rendimiento al jugador de ataque técnico que marca la diferencia con golpes potentes, certeros y técnicos. Es la pala ideal para ese tipo de jugador que dirige el partido con su técnica y fuerza. que podemos decir que es ligeramente alto, y su forma diamante en la pista nos ofrece toda la potencia que necesitamos para un juego basado en el contraataque.',
                    image: 'https://www.padelnuestro.com/images/cargador/productos/imagen-1-25918-fd7be8b3-26813-NORMAL.jpg'
                })

                const babolatRevenge = new Racket({
                    brand: babolat.id,
                    model: 'Babolat Revenge',
                    type: 'Potencia',
                    weight: '345-350g',
                    player: 'Ofensivo',
                    price: 294,
                    level: 'Principiante',
                    description: 'Creada para las jugadoras de pádel de nivel intermedio que buscan una pala cómoda, estable y duradera que proporcione excelentes salidas de la bola con gran potencia y parte de control. Construida en un molde de lágrima y con un balance medio, compuesta con materiales y tecnologías únicas de babolat, esta pala destaca por su manejabilidad, destaca por su diseño y altas prestaciones en el juego. Además es una pala indicada a los jugadores que tengan problemas de codo.',
                    image: 'https://www.padelnuestro.com/images/cargador/productos/imagen-1-25918-fd7be8b3-26813-NORMAL.jpg'
                })

                const babolatCounterVertuo = new Racket({
                    brand: babolat.id,
                    model: 'Babolat Counter Vertuo',
                    type: 'Hybrida',
                    weight: '350-360g',
                    player: 'Defensivo',
                    price: 114,
                    level: 'Intermedio',
                    description: 'Esta pala ha sido creada para aguantar los golpes adversarios. Posee el mejor equilibrio entre control, gracias a su molde en forma de lágrima destinada a jugadores de nivel principiante hasta intermedio. Es una pala dedicada al control y al jugador más táctico, te ayudara a tener un juego muy equilibrado y polivalente. Además es una pala indicada a los jugadores que tengan problemas de codo.',
                    image: 'https://www.padelnuestro.com/images/cargador/productos/imagen-1-25918-fd7be8b3-26813-NORMAL.jpg'
                })

                const babolats = [babolatTechnicalViper, babolatRevenge, babolatCounterVertuo]

                return Promise.all([
                    Promise.all(heads.map(head => head.save())),
                    Promise.all(starvies.map(starvie => starvie.save())),
                    Promise.all(adidass.map(adidas => adidas.save())),
                    Promise.all(bullpadels.map(bullpadel => bullpadel.save())),
                    Promise.all(asicss.map(asics => asics.save())),
                    Promise.all(babolats.map(babolat => babolat.save())),
                ])
            })

            .then(rackets => {

                const [alpha, metalbone,] = rackets
                const [agua, ora] = users

                const alphaComment = new Comment({ user: agua.id, racket: alpha.id, text: 'increible pala, con mucho control, desde la primera vez que la use la he hecho mia!!' })
                const metalboneComment = new Comment({ user: ora.id, racket: metalbone.id, text: 'una pala muy técnica, y muy rugosa, no esta hecha para todo el mundo ' })

                ora.favorites.push(metalbone)
                agua.favorites.push(metalbone, alpha)

                return Promise.all([alphaComment.save(), metalboneComment.save(), ora.save(), agua.save()])
            })

    })

    .then(() => disconnect())
    .then(() => console.log('disconnected'))