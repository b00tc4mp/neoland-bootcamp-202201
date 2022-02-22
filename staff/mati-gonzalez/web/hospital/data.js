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

const firstNames = ['Pepito', 'Peter', 'Wendy', 'John', 'Manuel', 'Matias', 'Paula', 'María', 'Judith', 'Alba', 'Alejandro', 'Gio', 'Joel', 'Nicolás', 'Jeremías', 'Ventura', 'Iván', 'Susan', 'Francesc', 'Zoraida', 'Victor', 'Yastá', 'Noseyo', 'Elba', 'Elber', 'Aitor', 'Cindy', 'Ana', 'Bat']

const lastNames = ['Grillo', 'Pan', 'Lennon', 'Barzi', 'Prats', 'Mandioca', 'Tigre', 'Esponja', 'Lechuga', 'Hernández', 'Gonzáles', 'Fumeta', 'Ventura', 'Rodríguez', 'García', 'Lorca', 'Pirulo', 'Campo', 'López', 'Canal', 'Zanahoria', 'Espineta', 'Patata', 'Surero', 'Nero', 'Capullito', 'Alelí', 'Tramboliko', 'Arbolada', 'Fuá', 'Extra']

const genders = ['female', 'male', 'other']

const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']

const cities = ['Platano', 'Naranja', 'Kiwi', 'Arandonos', 'Manzana', 'Pera', 'Kaki', 'Uva', 'Piña', 'Sandía', 'Melón', 'Mango']
const countries = ['Rojo', 'Verde', 'Amarillo', 'Azul', 'Violeta', 'Rosa', 'Carmín', 'Turquesa', 'Duquesa', 'Morado', 'Sótano']

const domains = ['gmail.com', 'outlook.com', 'yahoo.com', 'hotmail.com', 'mail.ru', 'gmx.de', 'pepito.com', 'wendy.com', 'myspace.com', 'messenger.com']

const people = []

for (let i = 0; i < 1000; i++) {
    const id = generateId()

    const firstName = randomElement(firstNames)
    const lastName = randomElement(lastNames)

    const gender = randomElement(genders)

    const bloodType = randomElement(bloodTypes)

    const day = randomInteger(1, 31)
    const month = randomInteger(1, 12)
    const year = randomInteger(1900, 2022)

    const birthDate = newDate(year, month, day)

    const city = randomElement(cities) + ' City'
    const country = 'Republic of ' + randomElement(countries)

    const domain = randomElement(domains)

    const email = firstName.toLowerCase() + '.' + lastName.toLowerCase() + '@' + domain
    const phone = randomInteger(600000000, 790000000)

    const person = new Person(id, firstName, lastName, gender, birthDate, bloodType, city, country, email, phone)

    people[i] = person
}

const hospital = {
    patients: people
} 