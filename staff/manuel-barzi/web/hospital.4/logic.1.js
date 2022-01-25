// function getPatientById(id) {
//     let patient

//     for (let i = 0; i < hospital.patients.length; i++)
//         if (hospital.patients[i].id === id) {
//             patient = hospital.patients[i]

//             break
//         }

//     return patient   
// }

// const getPatientById = function (id) {
//     let patient

//     for (let i = 0; i < hospital.patients.length; i++)
//         if (hospital.patients[i].id === id) {
//             patient = hospital.patients[i]

//             break
//         }

//     return patient   
// }

// const getPatientById = id => {
//     // let patient

//     // for (let i = 0; i < hospital.patients.length; i++)
//     //     if (hospital.patients[i].id === id) {
//     //         patient = hospital.patients[i]

//     //         break
//     //     }

//     // const patient = hospital.patients.find(patient => patient.id === id)

//     // return patient   

//     return hospital.patients.find(patient => patient.id === id)
// }

const getPatientById = id => hospital.patients.find(patient => patient.id === id)

// const getPatientsByFirstName = firstName => {
//     const patients = []
//     let index = 0

//     for (let i = 0; i < hospital.patients.length; i++)
//         if (hospital.patients[i].firstName === firstName) {
//             patients[index] = hospital.patients[i]

//             index++
//         }

//     return patients
// }

const getPatientsByFirstName = firstName => hospital.patients.filter(patient => patient.firstName === firstName)

// const getPatientsByLastName = lastName => {
//     const patients = []
//     let index = 0

//     for (let i = 0; i < hospital.patients.length; i++)
//         if (hospital.patients[i].lastName === lastName) {
//             patients[index] = hospital.patients[i]

//             index++
//         }

//     return patients
// }

const getPatientsByLastName = lastName => hospital.patients.filter(patient => patient.lastName === lastName)

// const getPatientsByGender = gender => {
//     const patients = []
//     let index = 0

//     for (let i = 0; i < hospital.patients.length; i++)
//         if (hospital.patients[i].gender === gender) {
//             patients[index] = hospital.patients[i]

//             index++
//         }

//     return patients
// }

const getPatientsByGender = gender => hospital.patients.filter(patient => patient.gender === gender)

// const getPatientsByBloodType = bloodType => {
//     const patients = []
//     let index = 0

//     for (let i = 0; i < hospital.patients.length; i++)
//         if (hospital.patients[i].bloodType === bloodType) {
//             patients[index] = hospital.patients[i]

//             index++
//         }

//     return patients
// }

const getPatientsByBloodType = bloodType => hospital.patients.filter(patient => patient.bloodType === bloodType)