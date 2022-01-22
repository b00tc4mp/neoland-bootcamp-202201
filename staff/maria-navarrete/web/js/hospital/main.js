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

var idInput = document.querySelector('.id')
idInput.addEventListener('keypress', function(event){
    if(event.key === 'Enter'){
        var patients = getPatientById(idInput.value)
        renderPatients(patients)
        mechanizeTableClicks()
    }
})

var firstNameInput = document.querySelector('.first-name')
firstNameInput.addEventListener('keypress', function(event){
    if(event.key === 'Enter'){
        var patients = getPatientsByFirstName(firstNameInput.value)
        renderPatients(patients)
        mechanizeTableClicks()
    }
})

var lastNameInput = document.querySelector('.last-name')
lastNameInput.addEventListener('keypress', function(event){
    if(event.key === 'Enter'){
        var patients = getPatientsByLastName(lastNameInput.value)
        renderPatients(patients)
        mechanizeTableClicks()
    }
})

var genderInput = document.querySelector('.gender')
genderInput.addEventListener('keypress', function(event){
    if(event.key === 'Enter'){
        var patients = getPatientsByGender(genderInput.value)
        renderPatients(patients)
        mechanizeTableClicks()
    }
})

var yearInput = document.querySelector('.year')
yearInput.addEventListener('keypress', function(event){
    if(event.key === 'Enter'){
        var patients = getPatientsByYear(parseInt(yearInput.value))
        renderPatients(patients)
        mechanizeTableClicks()
    }
})

var bloodTypeInput = document.querySelector('.blood-type')
bloodTypeInput.addEventListener('keypress', function(event){
    if(event.key === 'Enter'){
        var patients = getPatientsByBloodType(bloodTypeInput.value)
        renderPatients(patients)
        mechanizeTableClicks()
    }
})


