function Shape(color, width, height) {
    const container = document.createElement('div')
    const { style } = container

    style.position = 'absolute'
    style.width = `${width}px`
    style.height = `${height}px`
    style.backgroundColor = color

    this.x = 0
    this.y = 0

    style.top = `${this.y}px`
    style.left = `${this.x}px`

    this.container = container
}

Shape.prototype.moveLeft = function (step) {
    this.x = this.x - step

    this.container.style.left = `${this.x}px`
}

Shape.prototype.moveRight = function (step) {
    this.x = this.x + step

    this.container.style.left = `${this.x}px`
}

Shape.prototype.moveUp = function (step) {
    this.y = this.y - step

    this.container.style.top = `${this.y}px`
}

Shape.prototype.moveDown = function (step) {
    this.y = this.y + step

    this.container.style.top = `${this.y}px`
}

const pupil = new Shape('black', 10, 10)

let xDir
let yDir

setInterval(() => {
    if (pupil.x <= 0)
        xDir = 'right'
    else if (pupil.x >= 10)
        xDir = 'left'

    if (xDir === 'right')
        pupil.moveRight(Math.random())
    else if (xDir === 'left')
        pupil.moveLeft(Math.random())

    if (pupil.y <= 0)
        yDir = 'down'
    else if (pupil.y >= 10)
        yDir = 'up'

    if (yDir === 'down')
        pupil.moveDown(Math.random())
    else if (yDir === 'up')
        pupil.moveUp(Math.random())
}, 100)

const eye = new Shape('yellow', 20, 20)
eye.moveDown(20)
eye.moveRight(40)

eye.container.append(pupil.container)

const mouth = new Shape('black', 50, 20)
mouth.moveDown(60)
mouth.moveRight(30)

const tooth = new Shape('white', 10, 15)
tooth.moveRight(30)

mouth.container.append(tooth.container)

const face = new Shape('tomato', 100, 100)

face.container.append(eye.container)
face.container.append(mouth.container)

face.moveDown(100)
face.moveRight(100)

document.body.append(face.container)

document.addEventListener('keydown', event => {
    const { key } = event

    if (key === 'ArrowUp')
        face.moveUp(10)
     else if (key === 'ArrowDown')
        face.moveDown(10)
     else if (key === 'ArrowLeft')
        face.moveLeft(10)
     else if (key === 'ArrowRight')
        face.moveRight(10)
})