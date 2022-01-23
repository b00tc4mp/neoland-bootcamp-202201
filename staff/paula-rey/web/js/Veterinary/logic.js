function getPatientById(id) {
    var patient

    for (var i= 0; i < veterinary.patients.length; i++)
        if (veterinary.patients[i].id === id) {
            patient = veterinary.patients[i]

            break
        }
    return patient
}

function getPatientsByName(name) {
    var patients = []
    var index = 0

    for (var i = 0; i < veterinary.patients.length; i++)
        if (veterinary.patients[i].name === name) {
            patients[index] = veterinary.patients[i]

            index++
        }
    return patients
}

function getPatientsBySurname(surname) {
    var patients = []
    var index = 0

    for (var i = 0; i < veterinary.patients.length; i++)
        if (veterinary.patients[i].surname === surname) {
            patients[index] = veterinary.patients[i]
            
            index++
        }
    return patients
}


function getPatientsByMobile(mobile) {
    var patients = []
    var index = 0

    for (var i=0; i < veterinary.patients.length; i++)
        if (veterinary.patients[i].mobile === mobile) {
            patients[index] = veterinary.patients[i]

            index++
        }
    return patients
}

function getPatientsByHumanName(humanName) {
    var patients = []
    var index = 0

    for (var i = 0; i < veterinary.patients.length; i++)
        if (veterinary.patients[i].humanName === humanName) {
            patients[index] = veterinary.patients[i]

            index++
        }

    return patients
}

function getPatientsByYear(year) {
    var patients = []
    var index = 0

    for (var i = 0; i < veterinary.patients.length; i++)
        if (veterinary.patients[i].birthDate.getFullYear() === year) {
            patients[index] = veterinary.patients[i]

            index++
        }

    return patients
}

function getPatientsByGender(gender) {
    var patients = []
    var index = 0

    for (var i = 0; i < veterinary.patients.length; i++)
        if (veterinary.patients[i].gender === gender) {
            patients[index] = veterinary.patients[i]

            index++
        }

    return patients
}

function getPatientsByBreed(breed) {
    var patients = []
    var index = 0

    for (var i = 0; i < veterinary.patients.length; i++)
        if (veterinary.patients[i].breed === breed) {
            patients[index] = veterinary.patients[i]

            index++
        }

    return patients
}


