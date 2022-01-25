const idInput = document.querySelector('.id')
idInput.addEventListener('keypress', function(event){
    if(event.key === 'Enter'){
        const patients = getPatientById(idInput.value)
        renderPatients(patients)
        mechanizeTableClicks()
    }
})

const firstNameInput = document.querySelector('.first-name')
firstNameInput.addEventListener('keypress', function(event){
    if(event.key === 'Enter'){
        const patients = getPatientsByFirstName(firstNameInput.value)
        renderPatients(patients)
        mechanizeTableClicks()
    }
})

const lastNameInput = document.querySelector('.last-name')
lastNameInput.addEventListener('keypress', function(event){
    if(event.key === 'Enter'){
        const patients = getPatientsByLastName(lastNameInput.value)
        renderPatients(patients)
        mechanizeTableClicks()
    }
})

const genderInput = document.querySelector('.gender')
genderInput.addEventListener('keypress', function(event){
    if(event.key === 'Enter'){
        const patients = getPatientsByGender(genderInput.value)
        renderPatients(patients)
        mechanizeTableClicks()
    }
})

const yearInput = document.querySelector('.year')
yearInput.addEventListener('keypress', function(event){
    if(event.key === 'Enter'){
        const patients = getPatientsByYear(parseInt(yearInput.value))
        renderPatients(patients)
        mechanizeTableClicks()
    }
})

const bloodTypeInput = document.querySelector('.blood-type')
bloodTypeInput.addEventListener('keypress', function(event){
    if(event.key === 'Enter'){
        const patients = getPatientsByBloodType(bloodTypeInput.value)
        renderPatients(patients)
        mechanizeTableClicks()
    }
})


