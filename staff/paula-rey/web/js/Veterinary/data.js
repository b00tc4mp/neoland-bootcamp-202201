function Animal(id, name, surname, mobile, animalName, birthDate, gender, breed) {
    this.id = id
    this.name = name
    this.surname = surname
    this.mobile = mobile
    this.animalName = animalName
    this.birthDate = birthDate
    this.gender = gender 
    this.breed = breed
}

var aslan = new Animal(
    generateId(),
    'Ele',
    'Fante',
    generateMobile(),
    'Aslan',
    newDate(2015, 1, 15),
    'male',
    'bengal'
)

var ciro = new Animal(
    generateId(),
    'Suzana',
    'Horia',
    generateMobile(),
    'Ciro',
    newDate(2013, 11, 20),
    'male',
    'ragdoll'
)

var hamlet = new Animal(
    generateId(),
    'Elba',
    'Surero',
    generateMobile(),
    'Hamlet',
    newDate(2010, 9, 21),
    'female',
    'asian'
)

var kenta = new Animal(
    generateId(),
    'Ana',
    'Conda',
    generateMobile(),
    'Kenta',
    newDate(2017, 10, 03),
    'female',
    'siamese'
)

var rayo = new Animal(
    generateId(),
    'Armando',
    'Guerra',
    generateMobile(),
    'Rayo',
    newDate(2019, 08, 08),
    'female',
    'european'
)


var otto = new Animal(
    generateId(),
    'Lola',
    'Mento',
    generateMobile(),
    'Otto',
    newDate(2020, 12, 12),
    'male',
    'european'
)

var cleo = new Animal(
    generateId(),
    'Electra',
    'Cuta',
    generateMobile(),
    'Cleo',
    newDate(2017, 10, 25),
    'female',
    'sphynx'
)

var anubis = new Animal(
    generateId(),
    'Cho',
    'Lizo',
    generateMobile(),
    'Anubis',
    newDate(2021, 08, 22),
    'female',
    'bengal'
)

var oreo = new Animal(
    generateId(),
    'E',
    'Lizo',
    generateMobile(),
    'Oreo',
    newDate(2014, 04, 20),
    'female',
    'siamese'
)

var samy = new Animal(
    generateId(),
    'Pau',
    'Yer',
    generateMobile(),
    'Samy',
    newDate(2015, 1, 15),
    'female',
    'european'
)

var animals = [
    aslan,
    ciro,
    hamlet,
    kenta,
    rayo,
    otto,
    cleo,
    anubis,
    oreo,
    samy
]

var veterinary = {
    users: animals
}





