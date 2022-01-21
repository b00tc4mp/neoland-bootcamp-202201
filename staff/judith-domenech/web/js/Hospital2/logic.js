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

function getPatientsByAge(age) {
    var patients = []
    var index = 0

    for (var i = 0; i < hospital.patients.length; i++)
        if (hospital.patients[i].age == age) {
            patients[index] = hospital.patients[i]

            index++
        }
    
    return patients
}