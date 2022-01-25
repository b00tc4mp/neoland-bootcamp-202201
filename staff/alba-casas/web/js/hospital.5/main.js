const resetInput = (focus) => {
  const arrInputs = document.querySelectorAll(".inputs > *");

  for (let i = 0; i < arrInputs.length; i++) {
    if (!(i === focus)) arrInputs[i].value = "";
  }
};

const firstNameInput = document.querySelector(".inputs__first-name");

firstNameInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    const patients = getPatientsByFirstName(firstNameInput.value);

    resetInput(1);
    renderPatients(patients);
    mechanizeTableClicks();
  }
});

const lastNameInput = document.querySelector(".inputs__last-name");

lastNameInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    const patients = getPatientsByLastName(lastNameInput.value);

    resetInput(2);
    renderPatients(patients);
    mechanizeTableClicks();
  }
});

const genderInput = document.querySelector(".inputs__gender");

genderInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    const patients = getPatientsByGender(genderInput.value);
    resetInput(3);
    renderPatients(patients);
    mechanizeTableClicks();
  }
});

const yearInput = document.querySelector(".inputs__year");

yearInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    const patients = getPatientsByYear(parseInt(yearInput.value));
    resetInput(4);
    renderPatients(patients);
    mechanizeTableClicks();
  }
});

const bloodTypeInput = document.querySelector(".inputs__blood-type");

bloodTypeInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    const patients = getPatientsByBloodType(bloodTypeInput.value);
    resetInput(5);
    renderPatients(patients);
    mechanizeTableClicks();
  }
});

const idInput = document.querySelector(".inputs__id");

idInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    const patient = getPatientById(idInput.value);

    resetInput(0);
    renderPatients([patient]);
    mechanizeTableClicks();
  }
});

// TODO list
// Cambiar clases y aplicar BEM
// Debuggar
// Dar formato a patients detalles ( hacerlo en una tabla )
