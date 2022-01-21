var firstNameInput = document.querySelector('.first-name')

firstNameInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        var patients = getPatientsByFirstName(firstNameInput.value)

        renderPatients(patients)

    }
})

var bloodTypeInput = document.querySelector('.blood-type')

bloodTypeInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        var patients = getPatientsByBloodType(bloodTypeInput.value)

        renderPatients(patients)

    }
})

var ageTypeInput = document.querySelector('.age')

ageTypeInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        var patients = getPatientsByAge(ageTypeInput.value)

        renderPatients(patients)
    }
})
