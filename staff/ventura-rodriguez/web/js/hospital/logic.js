function getPatientById(id) {
    var patient

    for (var i = 0; i < hospital.patients.length; i++)
        if (hospital.patients[i].id === id) {
            patient = hospital.patients[i]

            break
        }

    return patient   
}

function getPatientsByFirstName(firstName) {
    var patients = []
    var index = 0

    for (var i = 0; i < hospital.patients.length; i++)
        if (hospital.patients[i].firstName === firstName) {
            patients[index] = hospital.patients[i]

            index++
        }
    
    return patients
}

function getPatientsByLastName(lastName) {
    var patients = []
    var index = 0

    for (var i = 0; i < hospital.patients.length; i++)
        if (hospital.patients[i].lastName === lastName) {
            patients[index] = hospital.patients[i]

            index++
        }
    
    return patients
}

function getPatientsByGender(gender) {
    var patients = []
    var index = 0

    for (var i = 0; i < hospital.patients.length; i++)
        if (hospital.patients[i].gender === gender) {
            patients[index] = hospital.patients[i]

            index++
        }

    return patients    
}

function getPatientsByBloodType(bloodType) {
    var patients = []
    var index = 0

    for (var i = 0; i < hospital.patients.length; i++)
        if (hospital.patients[i].bloodType === bloodType) {
            patients[index] = hospital.patients[i]

            index++
        }

    return patients    
}