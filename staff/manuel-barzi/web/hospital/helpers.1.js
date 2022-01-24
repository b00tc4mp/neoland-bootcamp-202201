// function generateId() {
//     return randomInteger(100000000, 999999999).toString() + randomElement('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
// }

const generateId = () => randomInteger(100000000, 999999999).toString() + randomElement('ABCDEFGHIJKLMNOPQRSTUVWXYZ')

// function newDate(year, month, day) {
//     return new Date(year, month - 1, day)
// }

const newDate = (year, month, day) => new Date(year, month - 1, day)

// function randomInteger(min, max) {
//     return min + Math.round((max - min) * Math.random())
// }

const randomInteger = (min, max) => min + Math.round((max - min) * Math.random())

// function randomElement(iterable) {
//     const index = randomInteger(0, iterable.length - 1)

//     return iterable[index]
// }

const randomElement = iterable => {
    const index = randomInteger(0, iterable.length - 1)

    return iterable[index]
}