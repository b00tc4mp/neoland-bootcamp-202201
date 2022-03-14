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

                return Promise.all([head.save(), adidas.save(), starvie.save(), bullpadel.save()])
            })

            .then(([head, adidas, starvie, bullpadel]) => {

                const alpha = new Racket({
                    brand: head.id,
                    model: 'Alpha',
                    type: 'Hybrida',
                    weight: '360',
                    player: 'Aereo',
                    price: 305,
                    level: 'Avanzado',
                    description: `Con un formato de lágrima y un balance centrado supone una opción ideal para aquellos jugadores de nivel avanzado que buscan una pala polivalente que tenga una gran relación entre potencia y control, un manejo fácil de la pala. Un punto dulce ampolio y con toque muy agradable.
                    INFORMACIÓN
                    TIPO DE JUEGO:	POLIVALENTE
                    NUCLEO:	GOMA EVA
                    NIVEL DE JUEGO:	AVANZADO
                    MARCO: GRAFENO
                    FORMA: LAGRIMA
                    EDAD: ADULTOS
                    COLOR: NEGRA Y BLANCA	
                    CARA: GRAFENO
                    BALANCE: MEDIO
                    AÑO: 2021`,
                    image: 'https://www.padelnuestro.com/images/cargador/productos/imagen-1-21814-42210f7e-23406-NORMAL.jpg'
                })


                const astrumEris = new Racket({
                    brand: starvie.id,
                    model: 'Astrum Eris',
                    type: 'Control',
                    weight: '360',
                    player: 'Aereo',
                    price: 218,
                    level: 'Intermedio ',
                    description: `Presenta una forma redonda, en la cual su punto óptimo se encuentra en el centro del plano y la densidad de su Goma Soft V30 contribuye a lograr mayor velocidad de bola y facilidad en la ejecución del golpe. 
                    INFORMACIÓN
                    TIPO DE JUEGO: CONTROL
                    NUCLEO:	GOMA EVA BLANDA
                    NIVEL DE JUEGO:	INTERMEDIO
                    MARCO: FIBRA DE VIDRIO / CARBONO 3K
                    FORMA: REDONDA
                    EDAD: ADULTOS
                    COLOR: BLANCO DORADO
                    CARA: CARBONO 3K
                    BALANCE: MEDIO
                    AÑO: 2022`,
                    image: 'https://www.padelnuestro.com/images/cargador/productos/imagen-1-26518-beab4499-28653-NORMAL.jpg'
                })

                const raptor = new Racket({
                    brand: starvie.id,
                    model: 'Raptor',
                    type: 'Control',
                    weight: '360-370',
                    player: 'Tecnico',
                    price: 218,
                    level: 'Avanzado ',
                    description: `Una pala de alto rendimiento para jugadores con un nivel alto en pista. Incorpora el Raptor Core en el corazón de la pala para optimizar el balance y ofrecer mayor rigidez en esa zona. Se trata de una pala resistente gracias a sus materiales en el marco y cara de carbono. 
                    Está diseñada en forma redonda con un balance medio-bajo , además incorpora un relieve del plano rugoso que ofrece mayor precisión a la hora de dar efecto a la bola y su molde ayuda a optimizar y controlar los movimientos de la pala durante el juego. 
                    INFORMACIÓN
                    TIPO DE JUEGO: CONTROL
                    NUCLEO:	GOMA EVA
                    NIVEL DE JUEGO:	AVANZADO
                    MARCO: CARBONO
                    FORMA: REDONDA
                    EDAD: ADULTOS
                    COLOR: NEGRO
                    CARA: CARBONO
                    BALANCE: MEDIO`,
                    image: 'https://www.padelnuestro.com/images/cargador/productos/imagen-1-21822-15832805-23443-NORMAL.jpg'
                })


                const starvies = [astrumEris, raptor]


                const adipower = new Racket({
                    brand: adidas.id,
                    model: 'Adipower light 3.0',
                    type: 'control',
                    weight: '345',
                    player: 'Tecnico',
                    price: 154,
                    level: 'Bajo, Medio, Avanzado',
                    description: `Para jugadores que buscan golpes controlados y precisos en todo momento. Su forma es redonda, con un balance bajo y un peso aproximado entre los 345-360 gramos, ideal para conseguir mayor manejabilidad y equilibrio. Cuenta con un amplio punto dulce al centro que favorece las salidas de la bola. Su perfil de 38 mm.
                    INFORMACIÓN
                    TIPO DE JUEGO: CONTROL
                    NUCLEO:	GOMA EVA BLANDA
                    NIVEL DE JUEGO:	BAJO, INTERMEDIO Y AVANZADO
                    MARCO: CARBONO
                    FORMA: REDONDA
                    EDAD: ADULTOS
                    COLOR: BLANCO Y AZUL
                    CARA: CARBONO
                    BALANCE: BAJO
                    AÑO: 2020`,
                    image: 'https://www.padelnuestro.com/images/cargador/productos/imagen-1-21767-e5332038-23356-NORMAL.jpg'
                })

                const metalbone = new Racket({
                    brand: adidas.id,
                    model: 'Metalbone 3.1',
                    type: 'Potencia',
                    weight: '365',
                    player: 'Tecnico',
                    price: 318,
                    level: 'Avanzado ',
                    description: `Con forma de diamante, esta raqueta descubre otra dimensión en el pádel gracias a la posibilidad de personalizar el peso y el balance según las exigencias de cada partido. Con esta raqueta podrás marcar la diferencia en los golpes de ataque gracias a la potencia. Perfil del jugador: Raqueta diseñada para jugadores de nivel profesional o avanzado que desarrollan un juego de ataque basado en la potencia.
                    INFORMACIÓN
                    TIPO DE JUEGO: POTENCIA
                    NUCLEO:	GOMA EVA BLANDA
                    NIVEL DE JUEGO:	AVANZADO
                    MARCO: CARBONO
                    FORMA: DIAMANTE
                    EDAD: ADULTOS
                    COLOR: GRIS
                    CARA: ALUMINIO
                    BALANCE: BAJO
                    AÑO: 2022`,
                    image: 'https://www.padelnuestro.com/images/cargador/productos/imagen-1-25653-0faf6c8f-26849-NORMAL.jpg'
                })

                const adidass = [adipower, metalbone]

                return Promise.all([alpha.save(), adidass.save(), starvies.save()])
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