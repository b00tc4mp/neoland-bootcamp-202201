const { connect, disconnect } = require('mongoose')
const { User, Question } = require('./models')

let users 

connect('mongodb://localhost:27017/thylemma-db')
    .then(() => console.log('connected'))
    .then(() => Promise.all([
        User.deleteMany(),
        Question.deleteMany(),
    ]))
    .then(() => {
        const godFather = new User({ username: 'godFather', email: 'gonzalezmatias199930@gmail.com', password:'dogFight21'})
        const mPau = new User({ username: 'mPau', email: 'mp.navarrete13@gmail.com', password: 'matiEsElMejor'})
        const gonPer21 = new User({ username: 'gonPer21', email: 'mn.gonper@gmail.com', password: 'matiEsElMejor'})
        const flimsyGrub4 = new User({ username: 'flimsyGrub4', email: 'flimsygrub4@gmail.com', password: 'matiEsElMejor'})
        const elVenturilla = new User({ username: 'elVenturilla', email: 'elVentu@gmail.com', password: 'matiEsElMejor'})
        const elVenturillaPeroTranki = new User({ username: 'elVenturillaPeroTranki', email: 'elVentuTranki@gmail.com', password: 'matiEsElMejor'})
        const juds69 = new User({ username: 'juds69', email: 'juds@gmail.com', password: 'matiEsElMejor'})
        const manuXulo69 = new User({ username: 'manuXulo69', email: 'elManuXulo@gmail.com', password: 'matiEsElMejor'})

        return Promise.all([godFather.save(), mPau.save(), gonPer21.save(), flimsyGrub4.save(), elVenturilla.save(), elVenturillaPeroTranki.save(), juds69.save(), manuXulo69.save()])
    })
    .then(_users => {
        users = _users
        const [godFather, mPau, gonPer21, flimsyGrub4, elVenturilla, elVenturillaPeroTranki, juds69, manuXulo69] = users
        const question1 = new Question({text: 'Is happiness just chemicals flowing through your brain or something more?', categories: ['happiness', 'self-fullfilment'], user: godFather})
        const question2 = new Question({text: 'Can we really know everything?', categories: ['knowledge', 'self-fullfilment'], user: godFather})
        const question3 = new Question({text: 'Is there a God? and what could be considered as one if it exists?', categories: ['existence', 'divine'], user: godFather})
        const question4 = new Question({text: 'What is consciousness', categories: ['self-fullfilemnt', 'awareness'], user: godFather})

        const question5 = new Question({text: 'Is there an alternative to capitalism?', categories: ['politics', 'order'], user:mPau})
        const question6 = new Question({text: 'Are humans obligated to better themseleves?', categories: ['ethics', 'self-fullfilment'], user: mPau})
        const question7 = new Question({text: 'Is it more important to be respected or liked?', categories: ['choices'], user: mPau})
        const question8 = new Question({text: 'Is there a meaning of life?', categories: ['meaning', 'existence', 'self-fullfilment'], user: mPau})

        const question9 = new Question({text: 'Would you kill 10 people to save 100?', categories: ['ethics', 'choices'], user: gonPer21})
        const question10 = new Question({text: 'Do we have free will?', categories: ['awareness', 'choices'], user: gonPer21})
        const question11 = new Question({text: 'What is time?', categories: ['existence'], user: gonPer21})
        const question12 = new Question({text: 'Do acts of kindness have a motive?', categories: [''], user: gonPer21})

        const question13 = new Question({text: 'What is happiness?', categories: [''], user: flimsyGrub4})
        const question14 = new Question({text: 'Is mind or matter more real?', categories: [''], user: flimsyGrub4})
        const question15 = new Question({text: 'Is love simply physical desire or something more?', categories: [''], user: flimsyGrub4})
        const question16 = new Question({text: 'Where do thoughts come from?', categories: [''], user: flimsyGrub4})

        const question17 = new Question({text: 'Does evil come from within? And if so, why?', categories: [''], user: elVenturilla})
        const question18 = new Question({text: 'What is beauty?', categories: [''], user: elVenturilla})
        const question19 = new Question({text: 'Where were people before they were born?', categories: [''], user: elVenturilla})
        const question20 = new Question({text: 'If everyone spoke their mind would this world be a better place?', categories: [''], user: elVenturilla})

        const question21 = new Question({text: 'Where does the universe end?', categories: [''], user: elVenturillaPeroTranki})
        const question22 = new Question({text: 'What is infinity?', categories: [''], user: elVenturillaPeroTranki})
        const question23 = new Question({text: 'Is there a reason for Life?', categories: [''], user: elVenturillaPeroTranki})
        const question24 = new Question({text: 'Is there a beginning of the Universe?', categories: [''], user: elVenturillaPeroTranki})

        const question25 = new Question({text: 'Are highly intelligent people less happy than individuals with average intelligence?', categories: [''], user: juds69})
        const question26 = new Question({text: 'Does living our life for others give our life a meaning?', categories: [''], user: juds69})
        const question27 = new Question({text: 'What are numbers?', categories: [''], user: juds69})
        const question28 = new Question({text: 'Does fate exist?', categories: [''], user: juds69})

        const question29 = new Question({text: 'Are there limitations on free speech?', categories: [''], user: manuXulo69})
        const question30 = new Question({text: 'Are humans alone in the universe?', categories: [''], user: manuXulo69})
        const question31 = new Question({text: 'Is trust more important than love?', categories: [''], user: manuXulo69})
        const question32 = new Question({text: 'Why do we things we do not like to do?', categories: [''], user: manuXulo69})

        const question33 = new Question({text: 'Do we have a soul?', categories: [''], user: godFather})
        const question34 = new Question({text: 'What is intelligence?', categories: [''], user: godFather})
        const question35 = new Question({text: 'Can religious beliefs affect scientific thinking?', categories: [''], user: godFather})
        const question36 = new Question({text: 'Does belief make God exist?', categories: [''], user: godFather})
        const question37 = new Question({text: 'What happens after we die?', categories: [''], user: godFather})
        const question38 = new Question({text: 'How much control do we have over our life?', categories: [''], user: godFather})
        const question39 = new Question({text: 'How do we know our perceptions are real?', categories: [''], user: godFather})
        const question40 = new Question({text: 'Are we the biggest threat to humanity?', categories: [''], user: godFather})
        
        return Promise.all([ question1.save(), question2.save(), question3.save(), question4.save(), question5.save(),
        question6.save(), question7.save(), question8.save(), question9.save(), question10.save(), question11.save(), question12.save(), question13.save(),
        question14.save(), question15.save(), question16.save(), question17.save(), question18.save(), question19.save(), question20.save(), question21.save(),
        question22.save(), question23.save(), question24.save(), question25.save(), question26.save(), question27.save(), question28.save(), question29.save(),
        question30.save(), question31.save(), question32.save(), question33.save(), question34.save(), question35.save(), question36.save(),
        question37.save(), question38.save(), question39.save(), question40.save()])
    })

    .then(() => disconnect())

    .then(() => console.log('disconnected'))