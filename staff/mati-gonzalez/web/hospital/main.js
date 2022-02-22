const firstNameInput = document.querySelector('.first-name')

firstNameInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        const patients = getPatientsByFirstName(firstNameInput.value)

        renderResults(patients)
    }
})

const lastNameInput = document.querySelector('.last-name')

lastNameInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const patients = getPatientsByLastName(lastNameInput.value)

        renderResults(patients)
    }
})

const genderInput = document.querySelector('.gender')

genderInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const patients = getPatientsByGender(genderInput.value)

        renderResults(patients)
    }
})

const yearInput = document.querySelector('.year')

yearInput.addEventListener('keypress', function(event){
    if (event.key === 'Enter') {
        const patients = getPatientsByYear(parseInt(yearInput.value))

        renderResults(patients)
    }
})

const bloodTypeInput = document.querySelector('.bloodt-type')

bloodTypeInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const patients = getPatientsByBloodType(bloodTypeInput.value)

        renderResults(patients)
    }
})

const idInput = document.querySelector('.id')

idInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const patient = getPatientById(idInput.value)

        renderResults(patients)
    }
})