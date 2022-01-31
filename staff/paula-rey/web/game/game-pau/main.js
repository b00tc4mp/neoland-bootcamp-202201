
const cloud = new Cloudy('rgb(93,84, 223)', 260, 220, 30)

cloud.moveRight(400)
cloud.moveDown(550)

/*
cloud.container.addEventListener('click', () => {
    alert('Hey, dont touch me!')

    cloud.toggleTooth()
})*/

const sun = new Sunny('rgb(236, 236, 18)', 250, 250, 50)

sun.moveRight(400)
sun.moveDown(500)

/*
sun.container.addEventListener('click', () => {
    cloud.moveLeft(10)

    sun.toggleTooth()
})*/

document.body.append(sun.container)
document.body.append(cloud.container)

document.addEventListener('keydown', event => {
    const { key } = event

    if (key === 'w')
        cloud.moveUp(10)
    else if (key === 's')
        cloud.moveDown(10)
    else if (key === 'a')
        cloud.moveLeft(10)
    else if (key === 'd')
        cloud.moveRight(10)
})

document.addEventListener('keydown', event => {
    const { key } = event
    // algo que en caso de que se cumpla la condición se encienda o apage la luz
    toggleLight()
    if (key === 'ArrowUp')
        sun.moveUp(10)
    else if (key === 'ArrowDown')
        sun.moveDown(10)
    else if (key === 'ArrowLeft')
        sun.moveLeft(10)
    else if (key === 'ArrowRight')
        sun.moveRight(10)
})