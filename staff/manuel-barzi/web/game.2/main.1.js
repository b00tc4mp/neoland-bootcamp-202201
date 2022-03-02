const face = document.createElement('div')
face.classList.add('face')

function Pupil(color, width, height) {
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

Pupil.prototype.moveLeft = function (step) {
    this.x = this.x - step

    this.container.style.left = `${this.x}px`
}

Pupil.prototype.moveRight = function (step) {
    this.x = this.x + step

    this.container.style.left = `${this.x}px`
}

Pupil.prototype.moveUp = function (step) {
    this.y = this.y - step

    this.container.style.top = `${this.y}px`
}

Pupil.prototype.moveDown = function (step) {
    this.y = this.y + step

    this.container.style.top = `${this.y}px`
}

const pupil = new Pupil('black', 10, 10)

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

function Eye(color, width, height) {
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

Eye.prototype.moveLeft = function (step) {
    this.x = this.x - step

    this.container.style.left = `${this.x}px`
}

Eye.prototype.moveRight = function (step) {
    this.x = this.x + step

    this.container.style.left = `${this.x}px`
}

Eye.prototype.moveUp = function (step) {
    this.y = this.y - step

    this.container.style.top = `${this.y}px`
}

Eye.prototype.moveDown = function (step) {
    this.y = this.y + step

    this.container.style.top = `${this.y}px`
}

const eye = new Eye('yellow', 20, 20)
eye.moveDown(20)
eye.moveRight(40)

eye.container.append(pupil.container)

const mouth = document.createElement('div')
mouth.classList.add('mouth')
mouth.style.top = '60px'
mouth.style.left = '30px'

const tooth = document.createElement('div')
tooth.classList.add('tooth')
tooth.style.left = '30px'

mouth.append(tooth)

face.append(eye.container)
face.append(mouth)

face.x = 100
face.y = 100
face.xStep = 10
face.yStep = 10
face.style.left = `${face.x}px`
face.style.top = `${face.y}px`


document.body.append(face)

document.addEventListener('keydown', event => {
    const { key } = event

    if (key === 'ArrowUp') {
        face.y = face.y - face.yStep
        face.style.top = `${face.y}px`
    } else if (key === 'ArrowDown') {
        face.y = face.y + face.yStep
        face.style.top = `${face.y}px`
    } else if (key === 'ArrowLeft') {
        face.x = face.x - face.xStep
        face.style.left = `${face.x}px`
    } else if (key === 'ArrowRight') {
        face.x = face.x + face.xStep
        face.style.left = `${face.x}px`
    }
})