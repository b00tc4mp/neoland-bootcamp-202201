
const roboloko = new Roboloko('tomato')

roboloko.moveDown(100)
roboloko.moveRight(100)

const roboloko2 = new Roboloko('dodgerblue')

roboloko2.moveDown(100)
roboloko2.moveRight(300)

document.body.append(roboloko.container)
document.body.append(roboloko2.container)

document.addEventListener('keydown', event => {
    const { key } = event

    if (key === 'ArrowUp')
        roboloko.moveUp(10)
    else if (key === 'ArrowDown')
        roboloko.moveDown(10)
    else if (key === 'ArrowLeft')
        roboloko.moveLeft(10)
    else if (key === 'ArrowRight')
        roboloko.moveRight(10)

    if (key === 'w')
        roboloko2.moveUp(10)
    else if (key === 's')
        roboloko2.moveDown(10)
    else if (key === 'a')
        roboloko2.moveLeft(10)
    else if (key === 'd')
        roboloko2.moveRight(10)
})