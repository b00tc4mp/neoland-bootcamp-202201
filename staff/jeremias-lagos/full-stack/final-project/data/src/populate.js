const { connect, disconnect } = require('mongoose')
const { User, Tournament } = require('./models')

connect('mongodb://localhost:27017/tp-db')
    .then(() => console.log('connected'))
    .then(() => Promise.all([User.deleteMany(), Tournament.deleteMany()]))

    .then(() => {
        const jonathan = new User({
            name: "Jonathan Segarra",
            email: "jonathan@gmail.com",
            password: "123123123",
            role: "user"
        }),

        const ivan = new User({
            name: "Ivan Martinez",
            email: "ivan@gmail.com",
            password: "123123123",
            role: "user"
        }),

        const jere = new User({
            name: "Jere Lagos",
            email: "jere@gmail.com",
            password: "123123123",
            role: "admin"
        }),

        return Promise.all([jonathan.save(), ivan.save(), jere.save()]);
    })
    .then((users) => {
        const [jonathan, ivan ] = users;
        const tournament 
    })
    
    // preguntar a ventu


        