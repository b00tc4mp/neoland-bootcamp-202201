const readlineModule = require('readline')

readlineModule.emitKeypressEvents(process.stdin)
process.stdin.setRawMode(true)

const car = {
    icon: '',
    x: 0,
    y: 0
}

const step = {
    x: 5,
    y: 1
}

process.stdin.on('keypress', (charater, key) => {

    if (key.name === 'right')
        car.x += step.x
    else if (key.name === 'left')
        car.x -= step.x
    else if (key.name === 'up')
        car.y -= step.y
    else if (key.name === 'down')
        car.y += step.y
    else if (key.name === 'escape')
        process.exit(0)

    console.clear()
    console.log('\n'.repeat(car.y < 0? 0 : car.y) + ' '.repeat(car.x <0? 0 : car.x) + car.icon)
})