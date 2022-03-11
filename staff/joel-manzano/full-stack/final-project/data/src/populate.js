const { connect, disconnect } = require('mongoose')


connect('mongodb://localhost:27017/gm-db')
    .then(() => console.log('connected'))
    .then(() => Promise.all([
        User.deleteMany(),
        
    ]))

    .then(() => {
        const jowie = new User({ name: 'Jowie', email: 'jowie@cate.com', password: '123123123' })
        const ivan = new User({ name: 'Ivan', email: 'ivan@culo.com', password: '123123123' })

        return Promise.all([jowie.save(), ivan.save()])
    })
    





    .then(() => disconnect())
    .then(() => console.log('disconnected'))

