const thieve = {
    icon: '🚘',
    x: 0
}

const police = {
    icon: '🚔️',
    x: 0
}

const randomInteger = (min, max) => min + Math.round((max - min) * Math.random())

let intervals = 0

const intervalId = setInterval(() => {
    console.clear()

    let steps = randomInteger(0, 5)
    thieve.x += steps

    let road = '' 

    if (thieve.x < 10)
        road = ' '.repeat(thieve.x) + thieve.icon
    else {

        let steps = randomInteger(0, 5)
        police.x += steps

        if(police.x >= thief.x){
            console.log('police wins')
            clearInterval(intervalId)
        }
        else if(thief.x >= 100){
            console.log('thief wins')
            clearInterval(intervalId)
        }
        else if(police.x < thief.x){
            road = ' '.repeat(police.x) + police.icon + ' '.repeat(thief.x-police.x) + thief.icon
        }
        // TODO print police and thieve
        // TODO if police.x === thieve.x then print police behind thieve
        // TODO when police.x > thieve.x then police wins (stop there)
        // TODO if thieve.x >= 100 then thieve wins (stop there)
    }

    console.log(road)

}, 100)