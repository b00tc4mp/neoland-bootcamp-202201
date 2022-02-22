const generateId = () => randomInteger(100000000, 999999999).toString() + randomElement('ABCDEFGHIJKLMNOPQRSTUVWXYZ')

const newDate = (year, month, day) => new Date(year, month -1, day)

const randomInteger = (min,max) => min + Math.round((max-min) * Math.random())

const randomElement = iterable => {
    const index = randomInteger(0, iterable.length - 1)

    return iterable[index]
}

const calculateAge = birthDate => {
    const year = birthDate.getFullYear()
    const month = birthDate.getMonth()
    const day = birthDate.getDate()

    const date = new Date

    const yearNow = date.getFullYear()
    const monthNow = date.getMonth()
    const dayNow = date.getDate()

    let age

    if (monthNow === month && dayNow >= day || monthNow > month)
        age = yearNow - year
    else
        age = yearNow - year - 1
    
    return age
}