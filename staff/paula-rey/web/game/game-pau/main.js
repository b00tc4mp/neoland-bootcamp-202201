
const cloud = new Cloudy('rgb(93,84, 223)', 150, 150,)

cloud.moveRight(400)
cloud.moveDown(200)

/*
cloud.container.addEventListener('click', () => {
    alert('Hey, dont touch me!')

    cloud.toggleTooth()
})*/

const sun = new Sunny('rgb(236, 236, 18)', 150, 150)

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

    if (key === 'ArrowUp')
        sun.moveUp(10)
    else if (key === 'ArrowDown')
        sun.moveDown(10)
    else if (key === 'ArrowLeft')
        sun.moveLeft(10)
    else if (key === 'ArrowRight')
        sun.moveRight(10)
})