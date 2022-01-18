var patient1 = {
    firstName : 'Lucatiel',
    lastName: 'of Mirrah',
    age: 27,
    genre: 'female'
}

var patient2 = {
    firstName : 'Artorias',
    lastName: 'of the Abyss',
    age: 15267,
    genre: 'male'
}

var patient3 = {
    firstName : 'Sif',
    lastName: 'of the Abyss',
    age: 15167,
    genre: 'male'
}


var list = [
    patient1,
    patient2,
    patient3,
]


var hospital = {
    patients: list
}


//for(var i = 0; i < hospital.patients.length; i++) {

    //if(hospital.patients[i].genre === 'male') console.log(hospital.patients[i])

//}
var countMale = 0

for(var i = 0; i < hospital.patients.length; i++) {

    if(hospital.patients[i].genre === 'male') {
        countMale++
    }
    // else
}

console.log("total male patients is: " + countMale)

// TODO print on screen the total female patients