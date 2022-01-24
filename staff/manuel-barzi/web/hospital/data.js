function Person(id, firstName, lastName, gender, birthDate, bloodType, city, country, email, phone) {
    this.id = id
    this.firstName = firstName
    this.lastName = lastName
    this.gender = gender
    this.birthDate = birthDate
    this.bloodType = bloodType
    this.city = city
    this.country = country
    this.email = email
    this.phone = phone
}


var firstNames = ['Pepito', 'John', 'Manuel', 'Matias', 'Paula', 'María', 'Judith', 'Alba', 'Alejandro', 'Gio', 'Joel', 'Nicolás', 'Jeremías', 'Ventura', 'Iván', 'Susan', 'Francesc', 'Zoraida', 'Victor', 'Yastá', 'Noseyo', 'Elba', 'Elber', 'Aitor', 'Cindy', 'Ana', 'Bat']

var lastNames = ['Grillo', 'Lennon', 'Barzi', 'Prats', 'Mandioca', 'Tigre', 'Esponja', 'Lechuga', 'Hernández', 'Gonzáles', 'Fumeta', 'Ventura', 'Rodríguez', 'García', 'Lorca', 'Pirulo', 'Campo', 'López', 'Canal', 'Zanahoria', 'Espineta', 'Patata', 'Surero', 'Nero', 'Capullín', 'Alelí']

var genders = ['female', 'male', 'other']

var bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']

var cities = ['Platano', 'Naranja', 'Kiwi', 'Arandonos', 'Manzana', 'Pera', 'Kaki', 'Uva', 'Piña', 'Sandía', 'Melón', 'Mango']
var countries = ['Rojo', 'Verde', 'Amarillo', 'Azul', 'Violeta', 'Rosa', 'Carmín', 'Turquesa', 'Duquesa', 'Morado', 'Sótano']

var people = []

for (var i = 0; i < 1000; i++) {
    var id = generateId()

    var firstName = randomElement(firstNames)
    var lastName = randomElement(lastNames)

    var gender = randomElement(genders)
    
    var bloodType = randomElement(bloodTypes)
    
    var day = randomInteger(1, 31)
    var month = randomInteger(1, 12)
    var year = randomInteger(1900, 2022)
    
    var birthDate = newDate(year, month, day)
    
    var city = randomElement(cities) + ' City'
    var country = randomElement(countries)
    
    var email = firstName.toLowerCase() + '.' + lastName.toLowerCase() + '@mail.com'
    var phone = randomInteger(600000000, 790000000)

    var person = new Person(id, firstName, lastName, gender, birthDate, bloodType, city, country, email, phone)

    people[i] = person
}
    

var hospital = {
    patients: people
}