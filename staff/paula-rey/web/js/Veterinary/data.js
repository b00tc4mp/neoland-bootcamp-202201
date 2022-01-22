function Animal(name, surname, id, mobile, animalName, birthDate, gender, breed) {
    this.name = name
    this.surname = surname
    this.id = id
    this.mobile = mobile
    this.animalName = animalName
    this.birthDate = birthDate
    this.gender = gender 
    this.breed = breed
}

var aslan = new Animal(
    'Ele',
    'Fante',
    generateId(),
    generateMobile(),
    'Aslan',
    newDate(2015, 1, 15),
    'male',
    'bengal'
)

var ciro = new Animal(
    'Suzana',
    'Horia',
    generateId(),
    generateMobile(),
    'Ciro',
    newDate(2013, 11, 20),
    'male',
    'ragdoll'
)

var hamlet = new Animal(
    'Elba',
    'Surero',
    generateId(),
    generateMobile(),
    'Hamlet',
    newDate(2010, 9, 21),
    'female',
    'asian'
)

var kenta = new Animal(
    'Ana',
    'Conda',
    generateId(),
    generateMobile(),
    'Kenta',
    newDate(2017, 10, 03),
    'female',
    'siamese'
)

var rayo = new Animal(
    'Armando',
    'Guerra',
    generateId(),
    generateMobile(),
    'Rayo',
    newDate(2019, 08, 08),
    'female',
    'european'
)


var otto = new Animal(
    'Lola',
    'Mento',
    generateId(),
    generateMobile(),
    'Otto',
    newDate(2020, 12, 12),
    'male',
    'european'
)

var cleo = new Animal(
    'Electra',
    'Cuta',
    generateId(),
    generateMobile(),
    'Cleo',
    newDate(2017, 10, 25),
    'female',
    'sphynx'
)

var anubis = new Animal(
    'Cho',
    'Lizo',
    generateId(),
    generateMobile(),
    'Anubis',
    newDate(2021, 08, 22),
    'female',
    'bengal'
)

var oreo = new Animal(
    'E',
    'Lizo',
    generateId(),
    generateMobile(),
    'Oreo',
    newDate(2014, 04, 20),
    'female',
    'siamese'
)

var samy = new Animal(
    'Pau',
    'Yer',
    generateId(),
    generateMobile(),
    'Samy',
    newDate(2015, 1, 15),
    'female',
    'european'
)

var animals = [
    alan,
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
