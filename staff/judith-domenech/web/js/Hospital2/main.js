var firstNameInput = document.querySelector('.first-name')

firstNameInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        var patients = getPatientsByFirstName(firstNameInput.value)

        renderPatients(patients)
    }
})

var bloodTypeInput = document.querySelector('.blood-type')

bloodTypeInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        var patients = getPatientsByBloodType(bloodTypeInput.value)

        renderPatients(patients)
    }
})

var genderTypeInput = document.querySelector('.gender')

genderTypeInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        var patients = getPatientsByGender(genderTypeInput.value)

        renderPatients(patients)
    }
})

/*  mejor no hacerlo asi, que sea tipado como el de abajo. 

var ageInput = document.querySelector('.age')

ageInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        var patients = getPatientsByAge(ageInput.value)

        renderPatients(patients)
    }
}) */

// cambiar el string a numerico parseInt (funcion ya hecha de java que convierte los strings de los imputs en numeros, redondea los decimales) 

var ageInput = document.querySelector('.age')

ageInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        var patients = getPatientsByAge(parseInt(ageInput.value))

        renderPatients(patients)
    }
}) 

