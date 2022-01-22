/*function printPatientsNames(patients) {
    for (var i = 0; i < patients.length; i++)
        console.log(patients[i].firstName, patients[i].lastName)
}

function printPatientsNames(patients) {
    var names = ''
    for (var i = 0; i < patients.length; i++)
        names += patients[i].firstName + ' ' + patients[i].lastName + '\n'
    alert(names)
}

function renderPatients(patients) {
     console.table(patients)
}


function printPatientsNames(patients){
    var names = '<ul>'

    for(var i = 0; i<patients.length; i++)
        names+= '<li>'+patients[i].firstName + ' '+ patients[i].lastName + '</li>'
    names+= '</ul>'
    
    document.body.innerHTML = names
}
*/

function renderPatients(patients) {
    var names = `<table class="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Birth Date</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Blood Type</th>
                        </tr>
                    </thead>
                    <tbody>`
    for (var i = 0; i < patients.length; i++) {
        var patient = patients[i]
        var id = patient.id
        var firstName = patient.firstName
        var lastName = patient.lastName
        var birthDate = patient.birthDate.toLocaleDateString()
        var age = calculateAge(patient.birthDate.getFullYear(), patient.birthDate.getMonth(), patient.birthDate.getDate())
        var gender = patient.gender
        var bloodType = patient.bloodType



        names = names + '<tr><td>' + id + '</td><td>' + firstName + '</td><td>' + lastName + '</td><td>' + birthDate + '</td><td>' + age + '</td><td>' + gender + '</td><td>' + bloodType + '</td></tr>'
    }

    names = names + '</tbody></table>'

    var results = document.querySelector('.results')
    results.innerHTML = names
}

function mechanizeTableClicks() {
    var rows = document.querySelector('.table').querySelector('tbody').querySelectorAll('tr')

    for (var i = 0; i < rows.length; i++) {
        var cell = rows[i].querySelector('td')
        cell.addEventListener('click', function (event) {
            var id = event.target.innerText
            var patient = getPatientById(id)
            if (confirm('Current note: "' + patient.note + '". Wanna change it?'))
                patient.note = prompt('note?')
        })
    }
}