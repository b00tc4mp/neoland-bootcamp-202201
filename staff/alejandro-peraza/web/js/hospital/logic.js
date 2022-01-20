
function countPatientsByGender(gender) {
    var count = 0

    for (var i = 0; i < hospital.patients.length; i++)
        if (hospital.patients[i].gender === gender)
            count++

    return count
}

function countPatientsByBloodType(bloodType) {
    var count = 0

    for (var i = 0; i < hospital.patients.length; i++)
        if (hospital.patients[i].bloodType === bloodType)
            count++

    return count
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

function getPatientsByNames(firstName, lastName) {
    var patients = []
    var index = 0

    for (var i = 0; i < hospital.patients.length; i++)
        if (hospital.patients[i].firstName === firstName && hospital.patients.lastName === lastName) {
            patients[index] = hospital.patients[i]

            index++
        }

    return patients

}


