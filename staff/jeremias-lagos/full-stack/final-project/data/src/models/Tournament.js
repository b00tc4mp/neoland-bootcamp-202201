const { model } = require('mongoose')
const { tournament } = require('../schemas')

const Tournament = model('Tournament', tournament)

module.exports = Tournament