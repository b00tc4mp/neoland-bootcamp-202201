const { connect, disconnect } = require('mongoose')
const { User, Tournament } = require('./models')

connect('mongodb://localhost:27017/tp-db')
    .then(() => console.log('connected'))
    .then(() => Promise.all([User.deleteMany(), Tournament.deleteMany()]))

    .then(() => {
        const jonathan = new User({ name: 'Jonathan', email: 'jonathan@mail.com', password: '123123123' })
        const jose = new User({ name: 'Jose', email: 'jose@mail.com', password: '123123123' })
        const john = new User({ name: 'John Snow', email: 'johnsnow@mail.com', password: '123123123' })
        const pepi = new User({ name: 'Pepi Gri', email: 'pepigri@gmail.com', password: '123123123' })


        return Promise.all([jonathan.save(), jose.save(), john.save(), pepi.save()])
    })

    

    
    
        

        
    
    
    // preguntar a ventu


