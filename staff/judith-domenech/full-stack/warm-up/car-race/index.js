let vehicle = '🚀'
let vehicle1 = '⛵️'
let vehicle2 = '🌪'

const randomInteger = (min, max) => min + Math.round((max - min) * Math.random())

const intervalId = setInterval(() => {
    console.clear()    

    let steps = randomInteger(0,5)
    vehicle = ' '.repeat(steps) + vehicle
    console.log(vehicle)

    steps = randomInteger(0,5)  
    vehicle1 = ' '.repeat(steps) + vehicle1
    console.log(vehicle1)

    steps = randomInteger(0,5)
    vehicle2 = ' '.repeat(steps) + vehicle2
    console.log(vehicle2) 

    if(vehicle.length >=100 || vehicle1.length >= 100 || vehicle2.length >=100){

        console.clear()
        
        console.log(vehicle)
        console.log(vehicle1)
        console.log(vehicle2)

        const results = [vehicle, vehicle1, vehicle2].sort()
        console.log(`Winner ${results[0].trim()} Score: ${results[0].length}`, 
                    `Second Place: ${results[1].trim()} Score: ${results[1].length}`,
                    `Loser: ${results[2].trim()} Score: ${results[2].length}`)
        clearInterval(intervalId)
}

}, 100)

