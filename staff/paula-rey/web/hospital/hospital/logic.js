const getPatientById = id => hospital.patients.find(patient => patient.id === id)

const getPatientsByFirstName = firstName => hospital.patients.filter(patient => patient.firstName === firstName)

const getPatientsByLastName = lastName => hospital.patients.filter(patient => patient.lastName === lastName)

const getPatientsByGender = gender => hospital.patients.filter(patient => patient.gender === gender)

const getPatientsByBloodType = bloodType => hospital.patients.filter(patient => patient.bloodType === bloodType)

const getPatientsByYear = year => hospital.patients.filter(patient => patient.birthDate.getFullYear() === year)