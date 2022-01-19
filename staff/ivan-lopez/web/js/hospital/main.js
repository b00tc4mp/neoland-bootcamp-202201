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

var countMale = 0
var countFemale = 0

for(var i = 0; i < hospital.patients.length; i++) {

    if(hospital.patients[i].genre === 'male') {
        countMale++ 
    }
    else {
        countFemale++
    }
    
}


console.log("total male patients is: " + countMale)
console.log("total female patients is: " + countFemale)
