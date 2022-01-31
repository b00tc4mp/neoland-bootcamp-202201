const bender = new Roboloko('lightgray', 125, 150)

bender.moveRight(200)
bender.moveDown(200)

bender.container.addEventListener('click', () => {
    alert('I want to drink something!!')

   /*  tomato.toggleTooth() */
})

const beer = new Beer('brown', 75, 125)

beer.moveRight(350)
beer.moveDown(225)


document.body.append(bender.container)
document.body.append(beer.container)


document.addEventListener('keydown', event => {
    const { key } = event

    if (key === 'ArrowUp')
        bender.moveUp(10)
    else if (key === 'ArrowDown')
        bender.moveDown(10)
    else if (key === 'ArrowLeft')
        bender.moveLeft(10)
    else if (key === 'ArrowRight')
        bender.moveRight(10)

    if (key === 'w')
        beer.moveUp(10)
    else if (key === 's')
        beer.moveDown(10)
    else if (key === 'a')
        beer.moveLeft(10)
    else if (key === 'd')
        beer.moveRight(10)
})