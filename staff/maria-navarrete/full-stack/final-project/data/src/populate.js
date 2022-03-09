const { connect, disconnect } = require('mongoose')
const { User, Action, Schedule } = require('./models')

let users
let actions

connect('mongodb://localhost:27017/beHooman-db')
    .then(() => console.log('connected'))
    .then(() => Promise.all([
        User.deleteMany(),
        Action.deleteMany(),
        Schedule.deleteMany()
    ]))
    .then(() => {
        const anonymous = new User({ username: 'anonymous', email: 'anonymous@email.com', password:'123123123'})
        const gio = new User({ username: 'gio123', email: 'gio@mail.com', password: '123123123' })
        const pau = new User({ username: 'pau123', email: 'pau@mail.com', password: '123123123', notifications: true })
        const ju = new User({ username: 'ju123', email: 'ju@mail.com', password: '123123123' })
        const arvi = new User({ username: 'arvi123', email: 'arvi@mail.com', password: '123123123' })
        const mati = new User({ username: 'mati123', email: 'mati@mail.com', password: '123123123' })
        
        ju.friends.push(mati.id, pau.id)
        mati.friends.push(gio.id, arvi.id)

        return Promise.all([anonymous.save(), gio.save(), pau.save(), ju.save(), arvi.save(), mati.save()])
    })
    .then(_users => {
        users = _users
        const [anonymous, gio, pau, ju, arvi, mati] = users
        const action1 = new Action({ description: 'Recoger basura en la calle', public: true, reqTime: 10, reqBudget: 0, author: gio.id})
        const action2 = new Action({ description: 'Hacer las compras a un anciano', public: true, reqTime: 90, reqBudget: 0, author: pau.id})
        const action3 = new Action({ description: 'Dar comida a alguien que lo necesite', public: true, reqTime: 20, reqBudget: 10, author: ju.id})
        const action4 = new Action({ description: 'Donar sangre', public: true, reqTime: 100, reqBudget: 0, author: arvi.id})
        const action5 = new Action({ description: 'Dar un abrazo a alguien que lo necesite', public: false, reqTime: 5, reqBudget: 0, author: mati.id})

        return Promise.all([action1.save(), action2.save(), action3.save(), action4.save(), action5.save()])
    })
    .then(_actions =>{
        actions = _actions
        const [action1, action2, action3, action4, action5] = actions
        const [anonymous, gio, pau, ju, arvi, mati] = users

        const date1 = new Date('March 10, 2020 14:00:00')

        const schedule1 = new Schedule({user: gio.id, action: action1.id, date: date1, repeat:"weekly"})
        const schedule2 = new Schedule({user: pau.id, action: action3.id, date: date1, repeat:"monthly"})
        const schedule3 = new Schedule({user: mati.id, action: action5.id, date: date1})
        
        return Promise.all([schedule1.save(), schedule2.save(), schedule3.save()])
    })
    .then(schedules =>{
        const [action1, action2, action3, action4, action5] = actions
        const [anonymous, gio, pau, ju, arvi, mati] = users

        gio.favs.push(action4.id, action3.id)
        arvi.favs.push(action2.id, action3.id)

        return Promise.all([gio.save(), arvi.save()])
    })
    
    .then(() => disconnect())

    .then(() => console.log('disconnected'))
