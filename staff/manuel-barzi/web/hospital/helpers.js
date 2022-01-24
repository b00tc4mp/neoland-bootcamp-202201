function generateId() {
    return randomInteger(100000000, 999999999).toString() + randomElement('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
}

function newDate(year, month, day) {
    return new Date(year, month - 1, day)
}

function randomInteger(min, max) {
    return min + Math.round((max - min) * Math.random())
}

function randomElement(iterable) {
    var index = randomInteger(0, iterable.length - 1)

    return iterable[index]
}