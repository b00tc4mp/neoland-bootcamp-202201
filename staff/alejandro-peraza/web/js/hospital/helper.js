/*function generateId() {
    return parseInt(Math.random() * 1000000000).toString()
}*/

const generateId = () => randomInteger (100000000, 99999999). toString() + randomElement('ABCDEFGHIJKLMNOPQRSTUVWXYZ')

/*function newDate(year, month, day) {
  return new Date(year, month - 1, day)
}*/

const newDate = (year, month, day) => new Date(year, month - 1, day)

const randomInteger = (min, max) => min + Math.round((max - min) * Math.random())

const randomElement = iterable => {
    const index = randomInteger(0, iterable.length - 1)

    return iterable[index]
}