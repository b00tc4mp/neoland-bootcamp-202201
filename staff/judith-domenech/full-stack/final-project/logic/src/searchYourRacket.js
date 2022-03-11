const { models: { Racket } } = require('data')
const { validators: { validateString } } = require('commons')


function searchYourRacket(type, weight, player, level) {

    return Racket.find()
        .then(rackets => {
            
           

})
}

module.exports = searchYourRacket