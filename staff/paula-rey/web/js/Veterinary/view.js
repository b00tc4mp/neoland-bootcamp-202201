function renderUsers(users) {
    var animalNames = '<table class="table"><thead><tr><th>ID</th><th>Name</th><th>Surname</th><th>Mobile</th><th>Animal Name</th><th>Birth Date</th><th>Gender</th><th>Breed</th></tr></thead><tbody>'

    for (var i = 0; i < users.length; i++) {
        var user = users[i]
        var id = user.id
        var name = user.name
        var surname = user.surname
        var mobile = user.mobile.toLocalDateString()
        var animalName = user.animalName
        var birthDate = user.birthDate.toLocalDateString()
        var gender = user.gender
        var breed = user.breed

        animalNames = animalNames + '<tr><td>' + id + '</td><td>' + name + '</td><td>' + surname + '</td><td>' + mobile + '</td><td>' + animalName + '</td><td>' + birthDate + '</td><td>' + gender + '</td><td>' + breed + '</td></tr>'
    }

    animalNames = animalNames + '</tbody></table>'

    var results = document.querySelector('.results')
    results.innerHTML = animalNames
}

function mechanizeTableClicks() {
    var rows = document.querySelector('.table').querySelector('tbody').querySelectorAll('tr')

    for (var i = 0; i < rows.length; i++) {
        var row = rows[i]

        var cell = row.querySelector('td')

        cell.addEventListener('click', function (event) {
            var id = event.target.innerText

            var user = getUserById(id)

            if (confirm('Current note: "' + patient.note + '". Wanna change it?'))
                user.note = prompt('note?')
        })
    }
}