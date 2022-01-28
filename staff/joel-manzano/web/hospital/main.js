const resetInputs = () => {
    const searchInputs = document.querySelectorAll('.search')
    for (let i = 0; i < searchInputs.length; i++)
        if (!(searchInputs[i] === document.activeElement))
            searchInputs[i].value = ''
}

const firstNameInput = document.querySelector('.first-name')

firstNameInput.addEventListener('keypress', event => {
    if (event.key === 'Enter') {
        const patients = getPatientsByFirstName(firstNameInput.value)

        renderPatients(patients)
        mechanizeTableClicks()
        resetInputs()
    }
})

const lastNameInput = document.querySelector('.last-name')

lastNameInput.addEventListener('keypress', event => {
    if (event.key === 'Enter') {
        const patients = getPatientsByLastName(lastNameInput.value)

        renderPatients(patients)
        mechanizeTableClicks()
        resetInputs()
    }
})

const genderInput = document.querySelector('.gender')

genderInput.addEventListener('keypress', event => {
    if (event.key === 'Enter') {
        const patients = getPatientsByGender(genderInput.value)

        renderPatients(patients)
        mechanizeTableClicks()
        resetInputs()
    }
})

const yearInput = document.querySelector('.year')

yearInput.addEventListener('keypress', event => {
    if (event.key === 'Enter') {
        const patients = getPatientsByYear(parseInt(yearInput.value))

        renderPatients(patients)
        mechanizeTableClicks()
        resetInputs()
    }
})

const bloodTypeInput = document.querySelector('.blood-type')

bloodTypeInput.addEventListener('keypress', event => {
    if (event.key === 'Enter') {
        const patients = getPatientsByBloodType(bloodTypeInput.value)

        renderPatients(patients)
        mechanizeTableClicks()
        resetInputs()
    }
})

const idInput = document.querySelector('.id')

idInput.addEventListener('keypress', event => {
    if (event.key === 'Enter') {
        const patient = getPatientById(idInput.value)

        renderPatients([patient])
        mechanizeTableClicks()
        resetInputs()
    }
})

var showAllButton = document.querySelector('.show-all')

showAllButton.addEventListener('click', () => {

    var patients = getShowAll()

    renderPatients(patients)
    mechanizeTableClicks()
    resetInputs()
})