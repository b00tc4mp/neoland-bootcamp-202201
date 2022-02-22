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

    if(vehicle.length >= 100){
        clearInterval(intervalId)
    } 
    if(vehicle1.length >= 100){
        clearInterval(intervalId)
    } 
    if(vehicle2.length >= 100){
        clearInterval(intervalId)
    } 
}, 100)