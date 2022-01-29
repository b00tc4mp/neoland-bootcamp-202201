
const cloud = new SunShine('rgb(93,84, 223)', 200, 200,)

cloud.moveRight(200)
cloud.moveDown(100)

/*
cloud.container.addEventListener('click', () => {
    alert('Hey, dont touch me!')

    cloud.toggleTooth()
})*/

const sun = new SunShine('rgb(236, 236, 18)', 150, 150)

sun.moveRight(300)
sun.moveDown(100)

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