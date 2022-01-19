var hospital = {
    patients: list
}


var countMale = 0
var countFemale = 0

for (var i = 0; i < hospital.patients.length; i++) {
    if (hospital.patients[i].gender === 'male') {
        countMale++
    }
    else {
        countFemale++
    }

}

console.log('total male patients is: ' + countMale)
console.log('total female patients is: ' + countFemale)