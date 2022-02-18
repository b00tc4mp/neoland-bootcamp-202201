const generateOrderDate = () => {
    const today = new Date()
    const date = today.getDate().toString() + "-" +  (today.getMonth() + 1).toString() + "-" + today.getFullYear().toString()
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    return date + " " + time
}

const randomInteger = (min, max) => min + Math.round((max - min) * Math.random())

const randomElement = iterable => {
    const index = randomInteger(0,iterable.length-1)
    return iterable[index]
} 

const generateOrderId = () => {
    const today = new Date()
    const date = today.getDate().toString() +  (today.getMonth() + 1).toString() + today.getFullYear().toString()
    return "PO" + randomInteger(1000, 9999).toString() + randomElement('ABCDEFGHIJKLMNOPQRSTUVWXYZ') +  date
}

export {
    generateOrderDate,
    generateOrderId
}