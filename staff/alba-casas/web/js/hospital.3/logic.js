function getPatientById(id) {
  var patient;

  for (var i = 0; i < hospital.patients.length; i++)
    if (hospital.patients[i].id === id) {
      patient = hospital.patients[i];

      break;
    }

  return patient;
}

function getPatientsByFirstName(firstName) {
  var patients = [];
  var index = 0;

  for (var i = 0; i < hospital.patients.length; i++)
    if (
      hospital.patients[i].firstName.toLowerCase() === firstName.toLowerCase()
    ) {
      patients[index] = hospital.patients[i];

      index++;
    }

  return patients;
}

function getPatientsByLastName(lastName) {
  var patients = [];
  var index = 0;

  for (var i = 0; i < hospital.patients.length; i++)
    if (
      hospital.patients[i].lastName.toLowerCase() === lastName.toLowerCase()
    ) {
      patients[index] = hospital.patients[i];

      index++;
    }

  return patients;
}

function getPatientsByGender(gender) {
  var patients = [];
  var index = 0;

  for (var i = 0; i < hospital.patients.length; i++)
    if (hospital.patients[i].gender.toLowerCase() === gender.toLowerCase()) {
      patients[index] = hospital.patients[i];

      index++;
    }

  return patients;
}

function getPatientsByYear(year) {
  var patients = [];
  var index = 0;

  for (var i = 0; i < hospital.patients.length; i++)
    if (hospital.patients[i].birthDate.getFullYear() === year) {
      patients[index] = hospital.patients[i];

      index++;
    }

  return patients;
}

function getPatientsByBloodType(bloodType) {
  var patients = [];
  var index = 0;

  for (var i = 0; i < hospital.patients.length; i++)
    if (
      hospital.patients[i].bloodType.toLowerCase() === bloodType.toLowerCase()
    ) {
      patients[index] = hospital.patients[i];

      index++;
    }

  return patients;
}

function getAllPatients() {
  return hospital.patients;
}

function getAllPatientsWithNotes() {
  var patients = [];
  var index = 0;

  for (var i = 0; i < hospital.patients.length; i++) {
    if (hospital.patients[i].note) {
      patients[index] = hospital.patients[i];
      index++;
    }
  }

  return patients;
}
