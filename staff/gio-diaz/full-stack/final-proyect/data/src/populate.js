const { connect, disconnect } = require('mongoose')
const { Quote } = require('./models')

connect('mongodb://localhost:27017/mindPlus-db')
.then(() => console.log('connected'))
.then(() => Promise.all([
    Quote.deleteMany(),
    
]))

    .then(() => {
        const note1 = new Quote({text: "Ni tan mal... By Arvi"})
        const note2 = new Quote({text: "Que papeloooon!!... By Mapa"})
        const note3 = new Quote({text: "Esta chulo el pirulo... By Manu"})
        const note4 = new Quote({text: "Nos van a pegar con Judith... El grupete"})
        const note5 = new Quote({text: "La droguis... By Gio"})
        const note6 = new Quote({text: "A la arbolada... By Manu"})
        const note7 = new Quote({text: "Maldita infeliz... By Gio"})
        const note8 = new Quote({text: "El fuah... By Manu"})
        const note9 = new Quote({text: "Deja de procastinar...By Manu"})
        const note10 = new Quote({text: "Evitemos el drama... By Manu"})
        const note11 = new Quote({text: "Controlen sus emociones... By manu"})
        const note12 = new Quote({text: "Ahi ta, ahi ta... By Manu"})
        const note13 = new Quote({text: "Buscando señal... By Mapa"})
        const note14 = new Quote({text: "No carnaaaaal...By Mapa"})
        const note15 = new Quote({text: "Ostiaaaaas... By Ivan"})
        const note16 = new Quote({text: "La he liado pardo... By Manu"})
        const note17 = new Quote({text: "Nunca cambien... By Mapa"})
        const note18 = new Quote({text: "Se va a enterar... By Manu"})
        const note19 = new Quote({text: "Fijaros... By Ventu"})
        const note20 = new Quote({text: "Haztelo ver"})

        return Promise.all([
            note1.save(), 
            note2.save(), 
            note3.save(), 
            note4.save(), 
            note5.save(), 
            note6.save(), 
            note7.save(), 
            note8.save(), 
            note9.save(), 
            note10.save(), 
            note11.save(), 
            note12.save(), 
            note13.save(), 
            note14.save(), 
            note15.save(), 
            note16.save(), 
            note17.save(), 
            note18.save(), 
            note19.save(), 
            note20.save(), 
        ])
    
    })


    .then(() => disconnect())
    .then(() => console.log('disconnected'))