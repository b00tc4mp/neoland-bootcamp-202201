const { model } = require('mongoose')
const { graffiti } = require('../schemas')


const Graffiti = model('Graffiti', graffiti)

module.exports = Graffiti