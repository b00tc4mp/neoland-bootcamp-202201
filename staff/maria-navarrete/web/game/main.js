const tomato = new Roboloko('tomato', 100, 100)

tomato.moveRight(100)
tomato.moveDown(100)

tomato.container.addEventListener('click', () => {
    alert('Give me more, baby!')
    tomato.toggleTooth()
})

const blue = new Roboloko('dodgerblue', 200, 200)

blue.moveRight(250)
blue.moveDown(150)

blue.container.addEventListener('click', () =>{
    alert('hey,dont touch me!')
    blue.toggleTooth()
})

const green = new Roboloko('greenyellow', 150, 150)

green.moveRight(500)
green.moveDown(70)

green.container.addEventListener('click', () => {
    blue.moveLeft(10)
    green.toggleTooth()
})

document.body.append(tomato.container)
document.body.append(blue.container)
document.body.append(green.container)

document.addEventListener('keydown', event => {
    const { key } = event

    if(key === 'ArrowUp')
        tomato.moveUp(10)
    else if(key === 'ArrowDown')
        tomato.moveDown(10)
    else if(key === 'ArrowLeft')
        tomato.moveLeft(10)
    else if(key === 'ArrowRight')
        tomato.moveRight(10)

    if(key === 'w')
        blue.moveUp(10)
    else if(key === 's')
        blue.moveDown(10)
    else if(key === 'a')
        blue.moveLeft(10)
    else if(key === 'd')
        blue.moveRight(10)
})