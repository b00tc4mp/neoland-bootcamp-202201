/*function printPatientsNames(patients) {
    for (var i = 0; i < patients.length; i++)
        console.log(patients[i].firstName, patients[i].lastName)
}*/

/*function printPatientsNames(patients) {
    var names = ''

    for (var i = 0; i < patients.length; i++)
        names = names + patients[i].firstName + ' ' + patients[i].lastName + '\n'

     alert(names)
}*/

function printPatientsNames(patients) {
    var names = '<ul>'

    for (var i = 0; i < patients.length; i++)
        names =  names +
            '<li>' + patients[i].firstName + ' ' + patients[i].lastName + '</li>'

    names = names + '</ul>'

    document.body.innerHTML = names
}

function printPatientsData(patients /* typeof Array */) {

    var tableInit = `
        <table class="table">
            <tr class="table-head">
                <th>first name</th>
                <th>last name</th>
                <th>age</th>
                <th>gender</th>
                <th>blood type</th>
            </tr>
    `

    var tableRows = ''

    for(var i = 0; i < patients.length; i++) {

        var patient = patients[i]

        var tableRowCells =
            '<tr class="table-row">' +
            '<td>' + patient.firstName + '</td>' +
            '<td>' + patient.lastName + '</td>' +
            '<td>' + patient.age + '</td>' +
            '<td>' + patient.gender + '</td>' +
            '<td>' + patient.bloodType + '</td>' +
            '</tr>'

        tableRows =  tableRows + tableRowCells
    }

    var tableEnd = "</table>"


    document.body.innerHTML = tableInit + tableRows + tableEnd
}