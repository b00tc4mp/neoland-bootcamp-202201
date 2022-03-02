
const cars = ['X', 'Y', 'O']

const randomInteger = (min, max) => min + Math.round((max - min) * Math.random()) 

const intervalId = setInterval(() => {

    console.clear()

    for (let i = 0; i < cars.length; i++) {
        const steps = randomInteger(0, 5)
        cars[i] = ' '.repeat(steps) + cars[i]
        console.log(cars[i])
    }

    if (cars[0].length >= 100 || cars[1].length >= 100 || cars[2].length >= 100) {

        clearInterval(intervalId)

        const results = [
            {car: cars[0].trim(), score: cars[0].length},
            {car: cars[1].trim(), score: cars[1].length},
            {car: cars[2].trim(), score: cars[2].length}
        ]
    
        .sort(({score: a}, {score: b}) => b - a)

        console.log(
            `winner: ${results[0].car} ${results[0].score}`,
            `second: ${results[1].car} ${results[1].score}`,
            `loser: ${results[2].car} ${results[2].score}`
        )
            // first resolve the exercise with you own knowledges, then debug this result
    }
}, 100)
