var idInput = document.querySelector('.id')
    
idInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            var patient = getPatientById(idInput.value)
    
            renderPatients([patient])
            mechanizeTableClicks()
        }
    })


var nameInput = document.querySelector('.name')

nameInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        var patients = getPatientsByName(nameInput.value)

        renderPatients(patients)
        mechanizeTableClicks()
    }
})


var surnameInput = document.querySelector('.surname')

surnameInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        var patients = getPatientsBySurname(surnameInput.value)
        
        renderPatients(patients)
        mechanizeTableClicks()
    }
})


var mobileInput = document.querySelector('.mobile')

mobileInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        var patients = getPatientsByMobile(mobileInput.value)
        
        renderPatients(patients)
        mechanizeTableClicks()
    }
})


var humanNameInput = document.querySelector('.human-name')

humanNameInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        var patients = getPatientsByHumanName(humanNameInput.value)
        
        renderPatients(patients)
        mechanizeTableClicks()
    }
})


var yearInput = document.querySelector('.year')

yearInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        var patients = getPatientsByYear(parseInt(yearInput.value))
        
        renderPatients(patients)
        mechanizeTableClicks()
    }
})


var genderInput = document.querySelector('.gender')

genderInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        var patients = getPatientsByGender(genderInput.value)
        
        renderPatients(patients)
        mechanizeTableClicks()
    }
})


var breedInput = document.querySelector('.breed')

breedInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            var patients = getPatientsByBreed(breedInput.value)

            renderPatients(patients)
            mechanizeTableClicks()
        }
    })

    


