class Shape{
    constructor (color, width, height) {
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

moveLeft(step) {
    this.x = this.x - step

    this.container.style.left = `${this.x}px`
}

moveRight(step) {
    this.x = this.x + step

    this.container.style.left = `${this.x}px`
}

moveUp(step) {
    this.y = this.y - step

    this.container.style.top = `${this.y}px`
}

moveDown(step) {
    this.y = this.y + step

    this.container.style.top = `${this.y}px`
}

add(shape) {
    this.container.append(shape.container)
}
}

class Roboloko extends Shape {
    constructor(color, width, height) {
    super(this, color, width, height)

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

    this.tooth = tooth

    const ear = new Shape(color, width / 10, height / 5)
    ear.moveRight(width)
    ear.moveDown(height / 5)

    const nose = new Shape('black', width / 20, height / 20)
    nose.container.style.borderRadius = '50%'

    nose.moveDown(eye.x + height / 10)
    nose.moveRight(width / 3)

    this.add(eye)
    this.add(mouth)
    this.add(ear)
    this.add(nose)

    const { style } = this.container

    style.cursor = 'pointer'
}


toggleTooth() {
    const { style } = this.tooth.container

    if (style.backgroundColor === 'white')
        style.backgroundColor = 'black'
    else
        style.backgroundColor = 'white'
}
}