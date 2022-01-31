const tomato = new Roboloko('tomato', 50, 50)

tomato.moveRight(100)
tomato.moveDown(100)

tomato.container.addEventListener('click', () => {
    alert('Give me more, baby!')

    tomato.toggleTooth()
})

const blue = new Roboloko('dodgerblue', 100, 100)

blue.moveRight(200)
blue.moveDown(100)

blue.container.addEventListener('click', () => {
    alert('Hey, dont touch me!')

    blue.toggleTooth()
})

const green = new Roboloko('greenyellow', 75, 75)

green.moveRight(350)
green.moveDown(100)

green.container.addEventListener('click', () => {
    blue.moveLeft(10)

    green.toggleTooth()
})

document.body.append(tomato.container)
document.body.append(blue.container)
document.body.append(green.container)

document.addEventListener('keydown', event => {
    const { key } = event

    if (key === 'ArrowUp')
        tomato.moveUp(10)
    else if (key === 'ArrowDown')
        tomato.moveDown(10)
    else if (key === 'ArrowLeft')
        tomato.moveLeft(10)
    else if (key === 'ArrowRight')
        tomato.moveRight(10)

    if (key === 'w')
        blue.moveUp(10)
    else if (key === 's')
        blue.moveDown(10)
    else if (key === 'a')
        blue.moveLeft(10)
    else if (key === 'd')
        blue.moveRight(10)
})