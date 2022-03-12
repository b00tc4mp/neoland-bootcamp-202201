const { models: { Racket } } = require('data')
const { validators: { validateString } } = require('commons')


function searchYourRacket(type, weight, player, level) {

    return Racket.find().lean().populate('brand')
        .then(rackets => {
            
           

})
}

module.exports = searchYourRacket

// find por los campos que queiras buscar y siempre debe dar un resultado
// ejemplo find({player, level, type, weight})