let car1 = '🚘'
let car2 = '🚖'
let car3 = '🚔️'

const randomInteger = (min, max) => min + Math.round((max-min) * Math.random())

const intervalId = setInterval(() => {
    console.clear()

    let steps = randomInteger(0, 5)
    car1 = ' '.repeat(steps) + car1
    console.log(car1)

    steps = randomInteger(0, 5)
    car2 = ' '.repeat(steps) + car2
    console.log(car3)

    if (car1.length >= 100) {
        clearInterval(intervalId)

        //TODO show race results
    }
}, 100)