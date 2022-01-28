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

Shape.prototype.add = function (shape) {
    this.container.append(shape.container)
}

function Roboloko(color, width, height) {
    Shape.call(this, color, width, height)

    const pupil = new Shape('black', width / 10, height / 10)

    let xDir
    let yDir

    const xLimit = width / 10
    const yLimit = height / 10

    setInterval(() => {
        if (pupil.x <= 0)
            xDir = 'right'
        else if (pupil.x >= xLimit)
            xDir = 'left'

        if (xDir === 'right')
            pupil.moveRight(Math.random())
        else if (xDir === 'left')
            pupil.moveLeft(Math.random())

        if (pupil.y <= 0)
            yDir = 'down'
        else if (pupil.y >= yLimit)
            yDir = 'up'

        if (yDir === 'down')
            pupil.moveDown(Math.random())
        else if (yDir === 'up')
            pupil.moveUp(Math.random())
    }, 100)

    const eye = new Shape('yellow', width / 5, height / 5)
    eye.moveDown(height / 5)
    eye.moveRight(width / 2.5)

    eye.add(pupil)

    const mouth = new Shape('black', width / 2, height / 5)
    mouth.moveDown(height / 1.7)
    mouth.moveRight(width / 3)

    const tooth = new Shape('white', width / 10, height / 6)
    tooth.moveRight(width / 3)

    mouth.add(tooth)

    this.add(eye)
    this.add(mouth)

    const { style } = this.container

    style.cursor = 'pointer'
}

Roboloko.prototype = Object.create(Shape.prototype)
Roboloko.prototype.constructor = Roboloko