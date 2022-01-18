var patient1 = {
    firstName: 'Lucatiel',
    lastName: 'of Mirrah',
    age: 27,
    genre: 'female',

}

var patient2 = {
    firstName: 'Mati',
    lastName: 'Stark',
    age: 18,
    genre: 'male',
}

var patient3 = {
    firstName: 'Maria',
    lastName: 'Paula',
    age: 27,
    genre: 'female',
}

var patient4 = {
    firstName: 'Ventu',
    lastName: 'Rodriguez',
    age: 22,
    genre: 'male',
}

var patient5 = {
    firstName: 'Gio',
    lastName: 'Crack',
    age: 34,
    genre: 'male',
}

var hospital = {
    patients: list
}

var list = [
    patient1,
    patient2,
    patient3,
    patient4,
    patient5
]

var males = 0
var females = 0
var youngs = 0
var oldies = 0

for (var i = 0 ; i < hospital.patients.length ; i++){
    if (hospital.patients[i].genre === 'male' ){
        console.log(hospital.patients[i])
        males++
    }else females++
    
    if(hospital.patients[i].age < 25) {youngs++}else{oldies++}
}