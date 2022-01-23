var idInput = document.querySelector('.id')

idInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        var user = getUserById(idInput.value)

        renderUsers([user])
    }
})


var nameInput = document.querySelector('.name')

nameInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        var users = getUsersByName(nameInput.value)

        renderUsers(users)
    }
})


var surnameInput = document.querySelector('.surname')

surnameInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        var users = getUsersBySurname(surnameInput.value)

        renderUsers(users)
    }
})


var mobileInput = document.querySelector('.mobile')

mobileInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        var user = getUserByMobile(mobileInput.value)

        renderUsers([user])
    }
})


var animalNameInput = document.querySelector('.animal-name')

animalNameInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        var users = getUsersByAnimalName(animalNameInput.value)

        renderUsers(users)
    }
})


var yearInput = document.querySelector('.year')

yearInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        var users = getUsersByYear(parseInt(yearInput.value))

        renderUsers(users)
    }
})


var genderInput = document.querySelector('.gender')

genderInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        var users = getUsersByGender(genderInput.value)

        renderUsers(users)
    }
})


var breedInput = document.querySelector('.breed')

breedInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            var users = getUsersByBreed(breedInput.value)

            renderUsers(users)
        }
})


