var firstNameInput = document.querySelector(".first-name");

firstNameInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    var patients = getPatientsByFirstName(firstNameInput.value);

    renderPatients(patients);
    mechanizeTableClicks();
  }
});

var lastNameInput = document.querySelector(".last-name");

lastNameInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    var patients = getPatientsByLastName(lastNameInput.value);

    renderPatients(patients);
    mechanizeTableClicks();
  }
});

var genderInput = document.querySelector(".gender");

genderInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    var patients = getPatientsByGender(genderInput.value);

    renderPatients(patients);
    mechanizeTableClicks();
  }
});

var yearInput = document.querySelector(".year");

yearInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    var patients = getPatientsByYear(parseInt(yearInput.value));

    renderPatients(patients);
    mechanizeTableClicks();
  }
});

var bloodTypeInput = document.querySelector(".blood-type");

bloodTypeInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    var patients = getPatientsByBloodType(bloodTypeInput.value);

    renderPatients(patients);
    mechanizeTableClicks();
  }
});

var idInput = document.querySelector(".id");

idInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    var patient = getPatientById(idInput.value);

    renderPatients([patient]);
    mechanizeTableClicks();
  }
});
