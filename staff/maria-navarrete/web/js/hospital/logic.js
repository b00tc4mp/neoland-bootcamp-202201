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

function getPatientsByBloodType(bloodType) {
    var arr = [];
    var index = 0;
    for (var i = 0; i < hospital.patients.length; i++)
        if (hospital.patients[i].bloodType === bloodType) {
            arr[index] = hospital.patients[i]
            index++
        }

    return arr
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