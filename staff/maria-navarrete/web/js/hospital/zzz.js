const countPatientsByGender = gender => hospital.patients.filter(patient => patient.gender=== gender).length

const countPatientsByBloodType = bloodType => hospital.patients.filter(patient => patient.bloodType === bloodType).length

const getPatientsByName = (firstName, lastName) => hospital.patients.filter(patient => patient.firstName === firstName && patient.lastName === lastName)
