function Person(id, firstName, lastName, gender, birthDate, bloodType, city, country, email, phone) {
    this.id= id
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


const firstNames=['Pepito','Peter', 'Wendy', 'Elba', 'Elsa', 'Elver', 'Aitor', 'Bob', 'Ventura', 'Manuel', 'Susan', 'Ricky', 'Judith', 'Gio', 'Alba', 'Paula', 'Maria', 'Mathias', 'Victor', 'Francesc', 'Joel', 'Ador', 'Juanca', 'Luisca', 'Jeremías', 'Alejandro', 'Ivan']
const lastNames= ['Pirulo', 'Grillo', 'Pan','Galarga', 'Trambolico', 'Arbolada', 'Fua', 'Surero', 'Pato', 'Pito', 'Guero', 'Esponja', 'Estrella', 'Chondo', 'Lazo', 'Calao', 'Canal', 'Dugo', 'Barzi', 'Ventura', 'Espineta', 'Patata', 'Capullito', 'Nero', 'Lechuga', 'Tilla', 'Gajazo', 'Tedero', 'Aniego', 'Mut', 'Tigo', 'Nano', 'Capuntas', 'Bio', 'Buino', 'Bero', 'Tidor']
const genders= ['female', 'male', 'other']
const bloodTypes=['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-']
const cities = ['Platano', 'Naranja', 'Kiwi', 'Arandanos', 'Manzana', 'Pera', 'Kiwi', 'Uva', 'Piña', 'Sandía', 'Melón', 'Mango']
const countries = ['Rojo', 'Verde', 'Amarillo', 'Morado', 'Azul', 'Violeta', 'Blanco', 'Negro', 'Naranja', 'Vinotinto', 'Aguamarina', 'Gris', 'Magenta', 'Celeste']
const domains = ['gmail.com', 'outlook.com', 'yahoo.com', 'hotmail.com', 'mail.ru', 'pepito.com', 'wendy.com', 'myspace.com', 'messenger.com']
const people=[]

for(let i = 0; i < 1000; i++){
    const id = generateId()
    const firstName = randomElement(firstNames)
    const lastName = randomElement(lastNames)
    const gender = randomElement (genders)
    const day = randomInteger(1,31)
    const month = randomInteger(1,12)
    const year = randomInteger(1922, 2022)
    const birthDate = newDate(year, month, day)
    const bloodType = randomElement(bloodTypes)
    const city = randomElement(cities) + ' City'
    const country = 'Republic of '+ randomElement(countries)
    const domain = randomElement(domains)
    const email = firstName.toLowerCase() + "." + lastName.toLowerCase() +"@" + domain
    const phone = randomInteger(600000000,790000000)

    const person = new Person(id, firstName, lastName, gender, birthDate, bloodType, city, country, email, phone)
    
    people[i]= person
}

const hospital = {
    patients: people
}