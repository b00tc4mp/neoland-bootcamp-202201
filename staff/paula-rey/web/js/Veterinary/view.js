
function renderUsers(users) {
    var animalNames = '<table class="table"><thead><tr><th>Name</th><th>Surname</th><th>ID</th><th>Mobile</th><th>Animal Name</th><th>Birth Date</th><th>Gender</th><th>Breed</th></tr></thead><tbody>'

    for (var i = 0; i < users.length; i++) {
        var user = users[i]
        var name = user.name
        var surname = user.surname
        var id = user.id
        var mobile = user.mobile.toLocalDateString()
        var animalName = user.animalName
        var birthDate = user.birthDate.toLocalDateString()
        var gender = user.gender
        var breed = user.breed

        animalNames = animalNames + '<tr><td>' + name + '</td><td>' + surname + '</td><td>' + id + '</td><td>' + mobile + '</td><td>' + animalName + '</td><td>' + birthDate + '</td><td>' + gender + '</td><td>' + breed + '</td></tr>'
    }

    animalNames = animalNames + '</tbody></table>'

    var results = document.querySelector('.results')
    results.innerHTML = animalNames

}