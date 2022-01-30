function renderResults(patients) {
  const tableHeaders = ["ID", "First Name", "Last Name", "E-mail", "Phone"];

  const headers = tableHeaders.map((header) => `<th>${header}</th>`).join(""); // '<th>ID</th><th>First... </th>'

  const rows = patients
    .map((patient) => {
      const { id, firstName, lastName, email, phone } = patient;

      const dataValues = [id, firstName, lastName, email, phone];

      const cells = dataValues
        .map((dataValue) => `<td>${dataValue}</td>`)
        .join("");

      return `<tr>${cells}</tr>`;
    })
    .join(""); // '<tr><td>...</td></tr><tr><td>...</td></tr>'

  const resultsPanel = document.querySelector(".results");

  resultsPanel.innerHTML = `<table class="table">
                              <thead>
                                  <tr>${headers}</tr>
                              </thead>
                              <tbody>
                                  ${rows}
                              </tbody>
                          </table>`;

  mechanizeResultsClicks();

  const filePanel = document.querySelector(".file");

  filePanel.classList.add("off");

  resultsPanel.classList.remove("off");
}

function mechanizeResultsClicks() {
  const rows = document
    .querySelector(".table")
    .querySelector("tbody")
    .querySelectorAll("tr");

  rows.forEach((row) => {
    row.addEventListener("click", function () {
      const cell = row.querySelector("td");

      const id = cell.innerText;

      const patient = getPatientById(id);

      renderFile(patient);
    });
  });
}

function renderFile(patient) {
  const filePanel = document.querySelector(".file");

  filePanel.innerHTML = `<h2 class="file__title">Personal file</h2>
  <div class="file__body">
      <div class="file__column">
          <div class="file__field">
              <label class="file__label" for="file__full-name">Full Name</label>
              <input disabled id="file__full-name" class="file__full-name">
          </div>

          <div class="file__field">
              <label class="file__label" for="file__id">ID</label>
              <input disabled class="file__id">
          </div>

          <div class="file__field">
              <label class="file__label" for="file__birthdate">Birth date</label>
              <input disabled id="file__birthdate" class="file__birthdate">
          </div>

          <div class="file__field">
              <label class="file__label" for="file__city">City</label>
              <input disabled id="file__city" class="file__city">
          </div>

          <div class="file__field">
              <label class="file__label" for="file__country">Country</label>
              <input disabled id="file__country" class="file__country">
          </div>
      </div>

      <div class="file__column">
          <div class="file__field">
              <label class="file__label" for="file__gender">Gender</label>
              <input disabled id="file__gender" class="file__gender">
          </div>

          <div class="file__field">
              <label class="file__label" for="file__blood-type">Blood type</label>
              <input disabled id="file__blood-type" class="file__blood-type">
          </div>

          <div class="file__field">
              <label class="file__label" for="file__age">Age</label>
              <input disabled id="file__age" class="file__age">
          </div>

          <div class="file__field">
              <label class="file__label" for="file__phone">Phone</label>
              <input disabled id="file__phone" class="file__phone">
          </div>

          <div class="file__field">
              <label class="file__label" for="file__email">E-mail</label>
              <input disabled id="file__email" class="file__email">
          </div>
      </div>
  </div>
  <div class="file__note">
      <textarea class="file__note-text" name="" id="" cols="30" rows="10"></textarea>
      <button class="file__save-note">Save note</button>
  </div>`;

  const fileFullName = filePanel.querySelector(".file__full-name");
  fileFullName.value = patient.firstName + " " + patient.lastName;

  const fileId = filePanel.querySelector(".file__id");
  fileId.value = patient.id;

  const fileBirthdate = filePanel.querySelector(".file__birthdate");
  fileBirthdate.value = patient.birthDate.toLocaleDateString();

  const fileCity = filePanel.querySelector(".file__city");
  fileCity.value = patient.city;

  const fileCountry = filePanel.querySelector(".file__country");
  fileCountry.value = patient.country;

  const fileGender = filePanel.querySelector(".file__gender");
  fileGender.value = patient.gender;

  const fileBloodType = filePanel.querySelector(".file__blood-type");
  fileBloodType.value = patient.bloodType;

  const fileAge = filePanel.querySelector(".file__age");
  //fileAge.value = calculateAge(patient.birthDate)
  fileAge.value = patient.getAge();

  const filePhone = filePanel.querySelector(".file__phone");
  filePhone.value = patient.phone;

  const fileEmail = filePanel.querySelector(".file__email");
  fileEmail.value = patient.email;

  const fileNoteTextarea = filePanel.querySelector(".file__note-text");

  if (patient.note) fileNoteTextarea.value = patient.note;
  else fileNoteTextarea.value = "";

  mechanizeSaveNote(patient);

  const resultsPanel = document.querySelector(".results");

  resultsPanel.classList.add("off");

  filePanel.classList.remove("off");
}

function mechanizeSaveNote(patient) {
  const filePanel = document.querySelector(".file");

  const fileSaveNoteButton = filePanel.querySelector(".file__save-note");

  fileSaveNoteButton.addEventListener("click", function () {
    const fileNoteTextarea = filePanel.querySelector(".file__note-text");

    const note = fileNoteTextarea.value;

    patient.note = note;
  });
}
