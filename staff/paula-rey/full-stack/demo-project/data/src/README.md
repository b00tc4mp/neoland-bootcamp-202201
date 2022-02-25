const { connect, disconnect } = require('mongoose')
const { User } = require('./models')
//const { CreditCard } = require('./creditCard')
//const { Property }

connect('mongodb://localhost:27017/demo-db')
    .then(() => console.log('connected'))

    //crear usuario:
    .then(() => User.create({name: 'Agua Salada', email: 'agua@salada.com', password: '123123123'}))

    
    //buscar usuario:
    .then(() => User.findById('62165dba7962542487e3e794'))

    
    //modificar usuario:
    .then(() => User.findById('62165dba7962542487e3e794'))
    .then(user => {
        user.name = 'Agua Salada'
        user.email = 'agua@salada.com'

        return user.save()
    })
    
    
    //borrar usuario:
    .then(user => User.deleteOne({ _id: user.id }))
    .then(() => console.log('user deleted'))

    
    //limpiar base de datos:
    .then(() => Promise.all([User.deleteMany(), Property.deleteMany(), CreditCard.deleteMany()])) 


    //crear varios usuarios a la vez(varias formas):
    //1
    .then(() => User.create({ name: 'Agua Cate', email: 'agua@cate.com', password: '123123123'}))
    .then(() => User.create({ name: 'Ora Culo', email: 'ora@culo.com', password: '123123123'}))

    .then(() => {
       const aguaSave = User.create({ name: 'Agua Cate', email: 'agua@cate.com', password: '123123123'})
       const oraSave = User.create({ name: 'Ora Culo', email: 'ora@culo.com', password: '123123123'})

        return Promise.all([aguaSave, oraSave])
    })

    //2
    .then(() => {
        const aguaSave = new User({ name: 'Agua Cate', email: 'agua@cate.com', password: '123123123' }).save()
        const oraSave = new User({ name: 'Ora Culo', email: 'ora@culo.com', password: '123123123' }).save()

        return Promise.all([aguaSave, oraSave])
    })

    //3
    .then(() => {
        const agua = new User({ name: 'Agua Cate', email: 'agua@cate.com', password: '123123123' })
        const ora = new User({ name: 'Ora Culo', email: 'ora@culo.com', password: '123123123' })

        return Promise.all([agua.save(), ora.save()])
    })



    //Datos embebidos.
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



    //Datos enlazados:
    .then(([agua, ora]) => {
        const talent = new Property({ 
            cadastral: 'ES-CA-123123123', 
            date: new Date, 
            address: 'Ramon Turro 169', 
            area: 3000,
            owners: [agua.id, ora.id]
        })

        return talent.save()
    })
    .then(talent => User.find({ _id: { $in: talent.owners }}))
    .then(users => {
        const [agua, ora] = users   
        
    })

    


    
    .then(() => disconnect())
    .then(() => console.log('disconnected'))