function getUserById(id) {
    var user

    for (var i= 0; i < veterinary.users.length; i++)
        if (veterinary.users[i].id === id) {
            user = veterinary.users[i]

            break
        }
    return user
}

function getUsersByName(name) {
    var users = []
    var index = 0

    for (var i = 0; i < veterinary.users.length; i++)
        if (veterinary.users[i].name === name) {
            users[index] = veterinary.users[i]

            index++
        }
    return users
}

function getUsersBySurname(surname) {
    var users = []
    var index = 0

    for (var i = 0; i < veterinary.users.length; i++)
        if (veterinary.users[i].surname === surname) {
            users[index] = veterinary.users[i]
            
            index++
        }
    return users
}


function getUserByMobile(mobile) {
    var users = []
    var index = 0

    for (var i=0; i < veterinary.users.length; i++)
        if (veterinary.users[i].mobile === mobile) {
            users = veterinary.users[i]

            index++
        }
    return users
}

function getUsersByAnimalName(animalName) {
    var users = []
    var index = 0

    for (var i = 0; i < veterinary.users.length; i++)
        if (veterinary.users[i].animalName === animalName) {
            users[index] = veterinary.users[i]

            index++
        }

    return users
}

function getUsersByYear(year) {
    var users = []
    var index = 0

    for (var i = 0; i < veterinary.users.length; i++)
        if (veterinary.users[i].birthDate.getFullYear() === year) {
            users[index] = veterinary.users[i]

            index++
        }

    return users
}

function getUsersByGender(gender) {
    var users = []
    var index = 0

    for (var i = 0; i < veterinary.users.length; i++)
        if (veterinary.users[i].gender === gender) {
            users[index] = veterinary.users[i]

            index++
        }

    return users
}

function getUsersByBreed(breed) {
    var users = []
    var index = 0

    for (var i = 0; i < veterinary.users.length; i++)
        if (veterinary.users[i].breed === breed) {
            users[index] = veterinary.users[i]

            index++
        }

    return users
}


function getShowAll () {
    var users = veterinary.users
    return users
}


