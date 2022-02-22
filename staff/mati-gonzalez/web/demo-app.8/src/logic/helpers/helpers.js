const generateOrderDate = () => {
    const today = new Date()
    const date = `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`
    const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`
    
    return `${date} ${time}`
}

const randomInteger = (min, max) => min + Math.round((max - min) *Math.random())

const randomElement = iterable => {
    const index = randomInteger(0, iterable.length - 1)
    
    return iterable[index]
}

const generateOrderId = () => {
    const today = new Date()
    const date = `${today.getDate()}${today.getMonth() + 1} ${today.getFullYear()}`

    return `PO${randomInteger(1000, 9999)} ${randomElement('ABCDEFGHIJKLMNOPQRSTUVWXYZ')} ${date}`
}

export {
    generateOrderDate,
    generateOrderId
}