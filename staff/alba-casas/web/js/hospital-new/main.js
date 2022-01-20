var firstNameInput = document.querySelector(".first-name");

firstNameInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    var patients = getPatientsByFirstName(firstNameInput.value);

    renderPatients(patients);
  }
});

var bloodTypeInput = document.querySelector(".blood-type");

bloodTypeInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    var patients = getPatientsByBloodType(bloodTypeInput.value);

    renderPatients(patients);
  }
});

var genderInput = document.querySelector(".gender");

genderInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    var patients = getPatientsByGender(genderInput.value);

    renderPatients(patients);
  }
});

var ageInput = document.querySelector(".age");

ageInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    var patients = getPatientsByAge(ageInput.value);

    renderPatients(patients);
  }
});
