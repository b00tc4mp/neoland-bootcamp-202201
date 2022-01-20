/*
var femaleCount = countPatientsByGender('female')
console.log('female', femaleCount)

var maleCount = countPatientsByGender('male')
console.log('male', maleCount)

var bloodTypeOPlus= countPatientsByBloodType('O+')
console.log('O+', bloodTypeOPlus)

var bloodTypeABMinus= countPatientsByBloodType('    AB-')
console.log('AB-', bloodTypeABMinus)

var bloodTypeOMinus= countPatientsByBloodType('O-')
console.log('O-', bloodTypeOMinus)

var oPlusPatients = getPatientsByBloodType('O+')
console.log('O+', oPlusPatients)
console.log('%c0+ %cpatients,', 'color: blue; font-family: courier; font-size: 1rem;', 'color: green;')
printPatientsNames(oPlusPatients)

var abPlusPatients = getPatientsByBloodType('AB+')
console.log('AB+', abPlusPatients)
console.log('%cAB+ %cpatients,', 'color: blue; font-family: courier; font-size: 1rem;', 'color: green;')
printPatientsNames(abPlusPatients)

var andys = getPatientsByNames('Andy', 'Garcia')
andys[1].notes = 'tiene mala pinta, su cara no sonrie, esta deprimido, le voy dar motivanol'
console.log(andys[1])


var bloodType = prompt('Blood Type')
var patients = getPatientsByBloodType(bloodType)
printPatientsNames(patients)

*/

var firstNameInput = document.querySelector('.first-name')
firstNameInput.addEventListener('keypress', function(event){
    if(event.key === 'Enter'){
        var patients = getPatientsByFirstName(firstNameInput.value)
        renderPatients(patients)
    }
})

var bloodTypeInput = document.querySelector('.blood-type')
bloodTypeInput.addEventListener('keypress', function(event){
    if(event.key === 'Enter'){
        var patients = getPatientsByBloodType(bloodTypeInput.value)
        renderPatients(patients)
    }
})

var genderInput = document.querySelector('.gender')
genderInput.addEventListener('keypress', function(event){
    if(event.key === 'Enter'){
        var patients = getPatientsByGender(genderInput.value)
        renderPatients(patients)
    }
})

var ageInput = document.querySelector('.age')
ageInput.addEventListener('keypress', function(event){
    if(event.key === 'Enter'){
        var patients = getPatientsByAge(ageInput.value)
        renderPatients(patients)
    }
})
