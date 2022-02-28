const thief = {
    icon: '🚘',
    x: 0
}

const police = {
    icon: '🚔️',
    x: 0
}

const randomInteger = (min, max) => min + Math.round((max - min) * Math.random())

const intervalId = setInterval(() => {
    console.clear()
    let road = ''
    let steps = randomInteger(0, 5)
    thief.x += steps
    if (thief.x < 10) road = ' '.repeat(thief.x) + thief.icon
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
            // police.x = 50
            // thief.x = 70
            // space between = ( 70 - 50 = 20)
            road = ' '.repeat(police.x) + police.icon + ' '.repeat(thief.x - police.x) + thief.icon
        }
    }
    console.log(road)
},100)


// const thief = {
//     icon: '🚘',
//     x: 0
// }

// const police = {
//     icon: '🚔️',
//     x: 0
// }

// const randomInteger = (min, max) => min + Math.round((max - min) * Math.random())

// const intervalId = setInterval(() => {

//     console.clear()

//     let road = ''
//     thief.x += randomInteger(0, 5)
//     police.x += thief.x > 10 ? randomInteger(0, 5) : 0
//     road = thief.x < 10 ? ' '.repeat(thief.x) + thief.icon : ' '.repeat(police.x) + police.icon + ' '.repeat(thief.x - police.x) + thief.icon

//     if (police.x >= thief.x) {
//         console.log('police wins')
//         clearInterval(intervalId)
//     }
//     else if (thief.x >= 100) {
//         console.log('thief wins')
//         clearInterval(intervalId)
//     }

//     console.log(road)
// }, 100)