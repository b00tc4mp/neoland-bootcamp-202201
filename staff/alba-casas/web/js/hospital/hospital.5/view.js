function renderPatients(patients) {
  const tableHeaders = [
    "ID",
    "First Name",
    "Last Name",
    "Birth Date",
    "Gender",
    "Blood Type",
    "E-mail",
    "Phone",
    "City",
    "Country",
  ];

  const ths = tableHeaders.map((header) => "<th>" + header + "</th>");

  const thsInline = ths.join("");

  let table =
    '<table class="table"><thead><tr>' + thsInline + "</tr></thead><tbody>";

  for (let i = 0; i < patients.length; i++) {
    const patient = patients[i];
    const id = patient.id;
    const firstName = patient.firstName;
    const lastName = patient.lastName;
    const birthDate = patient.birthDate.toLocaleDateString();
    const gender = patient.gender;
    const bloodType = patient.bloodType;
    const email = patient.email;
    const phone = patient.phone;
    const city = patient.city;
    const country = patient.country;

    const dataValues = [
      id,
      firstName,
      lastName,
      birthDate,
      gender,
      bloodType,
      email,
      phone,
      city,
      country,
    ];

    const tds = dataValues.map((dataValue) => "<td>" + dataValue + "</td>");

    const tdsInline = tds.join("");

    table = table + "<tr>" + tdsInline + "</tr>";
  }

  table = table + "</tbody></table>";

  const resultsPanel = document.querySelector(".results");
  resultsPanel.innerHTML = table;

  const filePanel = document.querySelector(".file");

  filePanel.classList.add("off");

  resultsPanel.classList.remove("off");
}

function mechanizeTableClicks() {
  const rows = document
    .querySelector(".table")
    .querySelector("tbody")
    .querySelectorAll("tr");

  rows.forEach((row) => {
    const cell = row.querySelector("td");

    cell.addEventListener("click", (event) => {
      const id = event.target.innerText;

      const patient = getPatientById(id);

      //if (confirm('Current note: "' + patient.note + '". Wanna change it?'))
      //    patient.note = prompt('note?')

      const resultsPanel = document.querySelector(".results");

      resultsPanel.classList.add("off");

      const filePanel = document.querySelector(".file");

      const fileFullName = filePanel.querySelector(".file__full-name");
      const filephone = filePanel.querySelector(".file__phone");
      const fileBloodType = filePanel.querySelector(".file__bloodType");
      const fileGender = filePanel.querySelector(".file__gender");
      const fileYear = filePanel.querySelector(".file__year");

      fileFullName.innerText = patient.firstName + " " + patient.lastName;
      filephone.innerText = "+34" + " " + patient.phone;
      fileBloodType.innerText = patient.bloodType;
      fileGender.innerText = patient.gender;
      fileYear.innerText = patient.birthDate.getFullYear();

      filePanel.classList.remove("off");
    });
  });
}
