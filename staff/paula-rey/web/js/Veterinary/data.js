function Cat(id, name, surname, mobile, humanName, birthDate, gender, breed) {
    this.id = id
    this.name = name
    this.surname = surname
    this.mobile = mobile
    this.humanName = humanName
    this.birthDate = birthDate
    this.gender = gender 
    this.breed = breed
}

var aslan = new Cat(
    generateId(),
    'Aslan',
    'Fante',
    111111111,
    'Ele',
    newDate(2015, 1, 15),
    'male',
    'bengal'
)

var ciro = new Cat(
    generateId(),
    'Ciro',
    'Horia',
    222222222,
    'Suzana',
    newDate(2013, 11, 20),
    'male',
    'ragdoll'
)

var hamlet = new Cat(
    generateId(),
    'Hamlet',
    'Surero',
    333333333,
    'Elba',
    newDate(2010, 9, 21),
    'female',
    'asian'
)

var kenta = new Cat(
    generateId(),
    'Kenta',
    'Conda',
    444444444,
    'Ana',
    newDate(2017, 10, 03),
    'female',
    'siamese'
)

var rayo = new Cat(
    generateId(),
    'Rayo',
    'Guerra',
    555555555,
    'Armando',
    newDate(2019, 08, 08),
    'female',
    'european'
)


var otto = new Cat(
    generateId(),
    'Otto',
    'Mento',
    666666666,
    'Lola',
    newDate(2020, 12, 12),
    'male',
    'european'
)

var cleo = new Cat(
    generateId(),
    'Cleo',
    'Cuta',
    777777777,
    'Electra',
    newDate(2017, 10, 25),
    'female',
    'sphynx'
)

var anubis = new Cat(
    generateId(),
    'Anubis',
    'Lizo',
    888888888,
    'Cho',
    newDate(2021, 08, 22),
    'female',
    'bengal'
)

var oreo = new Cat(
    generateId(),
    'Oreo',
    'Lizo',
    999999999,
    'E',
    newDate(2014, 04, 20),
    'female',
    'siamese'
)

var samy = new Cat(
    generateId(),
    'Samy',
    'Yer',
    333333333,
    'Pau',
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
    patients: animals
}





