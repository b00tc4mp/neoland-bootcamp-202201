function countPatientsByGender(gender) {
    var counter = 0
    for (var i = 0; i < hospital.patients.length; i++)
        if (hospital.patients[i].gender === gender)
            counter++
    return counter
}

function countPatientsByBloodType(bloodType) {
    counter = 0;
    for (var i = 0; i < hospital.patients.length; i++)
        if (hospital.patients[i].bloodType === bloodType)
            counter++
    return counter
}

function getPatientsByName(firstName, lastName) {
    var patients = []
    var index = 0

    for (var i = 0; i < hospital.patients.length; i++)
        if (hospital.patients[i].firstName === firstName && hospital.patients[i].lastName === lastName) {
            patients[index] = hospital.patients[i]
            index++
        }
    return patients
}