const resetInput = () => {
  const arrInputs = document.querySelectorAll(".inputs > *");

  for (let i = 0; i < arrInputs.length; i++) {
    if (!(arrInputs[i] === document.activeElement)) arrInputs[i].value = "";
  }
};

const firstNameInput = document.querySelector(".inputs__first-name");

firstNameInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    const patients = getPatientsByFirstName(firstNameInput.value);

    resetInput();
    renderPatients(patients);
    mechanizeTableClicks();
  }
});

const lastNameInput = document.querySelector(".inputs__last-name");

lastNameInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    const patients = getPatientsByLastName(lastNameInput.value);

    resetInput();
    renderPatients(patients);
    mechanizeTableClicks();
  }
});

const genderInput = document.querySelector(".inputs__gender");

genderInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    const patients = getPatientsByGender(genderInput.value);
    resetInput();
    renderPatients(patients);
    mechanizeTableClicks();
  }
});

const yearInput = document.querySelector(".inputs__year");

yearInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    const patients = getPatientsByYear(parseInt(yearInput.value));
    resetInput();
    renderPatients(patients);
    mechanizeTableClicks();
  }
});

const bloodTypeInput = document.querySelector(".inputs__blood-type");

bloodTypeInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    const patients = getPatientsByBloodType(bloodTypeInput.value);
    resetInput();
    renderPatients(patients);
    mechanizeTableClicks();
  }
});

const idInput = document.querySelector(".inputs__id");

idInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    const patient = getPatientById(idInput.value);

    resetInput();
    renderPatients([patient]);
    mechanizeTableClicks();
  }
});

// TODO list
// Cambiar clases y aplicar BEM
// Debuggar
// Dar formato a patients detalles ( hacerlo en una tabla )
