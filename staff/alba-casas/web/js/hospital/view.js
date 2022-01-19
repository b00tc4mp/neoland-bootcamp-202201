function printPatientsNames(patients) {
  var names = "<ul>";

  for (var i = 0; i < patients.length; i++)
    names =
      names +
      "<li>" +
      patients[i].firstName +
      " " +
      patients[i].lastName +
      "</li>";

  names = names + "</ul>";

  document.body.innerHTML = names;
}

function printPatientsData(patients) {
  var tableInit = `
  <table class="table">
      <tr class="table__head">
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Age</th>
        <th>Gender</th>
        <th>Blood type</th>
      </tr>
    </table>
  `;
  var tableEnd = "</table";

  var tableRow = 

  document.body.innerHTML = tableInit + tableEnd;
}
