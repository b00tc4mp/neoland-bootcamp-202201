
function renderPatients(patients) {
    var users = '<table class="table"><thead><tr><th>ID</th><th>Name</th><th>Surname</th><th>Mobile</th><th>Human Name</th><th>Birth Date</th><th>Gender</th><th>Breed</th></tr></thead><tbody>'

    for (var i = 0; i < patients.length; i++) {
        var patient = patients[i]
        var id = patient.id
        var name = patient.name
        var surname = patient.surname
        var mobile = patient.mobile
        var humanName = patient.humanName
        var birthDate = patient.birthDate.toLocalDateString()
        var gender = patient.gender
        var breed = patient.breed

        users = users + '<tr><td>' + id + '</td><td>' + name + '</td><td>' + surname + '</td><td>' + mobile + '</td><td>' + humanName + '</td><td>' + birthDate + '</td><td>' + gender + '</td><td>' + breed + '</td></tr>'
    }

    users = users + '</tbody></table>'

    var results = document.querySelector('.results')
    results.innerHTML = users
}

function mechanizeTableClicks() {
    var rows = document.querySelector('.table').querySelector('tbody').querySelectorAll('tr')

    for (var i = 0; i < rows.length; i++) {
        var row = rows[i]

        var cell = row.querySelector('td')

        cell.addEventListener('click', function (event) {
            var id = event.target.innerText

            var patient = getPatientById(id)

            if (confirm('Current note: "' + patient.note + '". Wanna change it?'))
                patient.note = prompt('note?')
        })
    }
}