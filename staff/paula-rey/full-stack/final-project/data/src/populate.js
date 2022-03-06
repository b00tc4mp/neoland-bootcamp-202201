const { connect, disconnect } = require('mongoose')
const { User } = require('./models')

connect('mongodb://localhost:27017/demo-db')
.then(() => console.log('connected'))
//.then(() => Promise.all([User.deleteMany()]))

    
    //crear usuario:
    .then(() => User.create({name: '', email: 'siriusblack@mail.com', password: '123123123'}))

    //Crear varios usuarios:
    .then(() => {
        const agua = new User({ name: 'Agua Cate', email: 'aguacate@mail.com', password: '123123123' })
        const ora = new User({ name: 'Ora Culo', email: 'oraculo@mail.com', password: '123123123' })
        const wendy = new User({ name: 'Wendy Pan', email: 'wendypan@mail.com', password: '123123123' })
        const pepi = new User({ name: 'Pepi Gri', email: 'pepigri@mail.com', password: '123123123' })
        const sirius = new User({ name: 'Sirius Black', email: 'siriusblack@mail.com', password: '123123123' })
        
        return Promise.all([agua.save(), ora.save(), wendy.save(), pepi.save(), sirius.save()])
    })
    
    //buscar usuario:
    .then(() => User.findById('6224d48e23c8542ec0a62a53'))
    
    
 
     //modificar usuario:
     .then(() => User.findById('6224d68e268cb9abf0da725a'))
     .then(user => {
         user.name = 'Agua Salada'
         user.email = 'aguasalada@mail.com'
 
         return user.save()
     })
     
     
     //borrar usuario:
     .then(user => User.deleteOne({ _id: user.id }))
     .then(() => console.log('user deleted'))
 
    
     //limpiar base de datos:
     .then(() => Promise.all([User.deleteMany(), Property.deleteMany(), CreditCard.deleteMany()])) 
     

    

    .then(() => disconnect())
    .then(() => console.log('disconnected'))