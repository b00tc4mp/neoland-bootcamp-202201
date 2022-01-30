class Shape {
    constructor(color, width, height, xpos, ypos, borderRadius) {
        const container = document.createElement('div')
        const { style } = container
        this.container = container

        style.position = 'absolute'
        style.width = `${width}px`
        style.height = `${height}px`
        style.backgroundColor = color
        style.borderRadius = `${borderRadius}%`

        this.x = xpos
        this.y = ypos
        style.left = `${this.x}px`
        style.top = `${this.y}px`
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

class Banana extends Shape {
    constructor(color, width, height, xpos, ypos, borderRadius) {
        super('', width, height, xpos, ypos, borderRadius)

        this.container.style.border = `${width/3}px solid transparent`
        this.container.style.borderRightColor = color
    }

}

class Minion extends Shape {
    constructor(color, width, height, xpos, ypos, borderRadius, eyes) {
        super(color, width, height, xpos, ypos, borderRadius)

        const { style } = this.container

        const glasses = new Shape('black', width, height / 15, 0, height / 3.8, 30)
        this.add(glasses)

        const eye = new Shape('white', width / 2.3, width / 2.3, width / 5, height * -1 / 6, 50)
        const eyeStyle = eye.container.style
        eyeStyle.borderColor = '#949699'
        eyeStyle.borderStyle = 'solid'
        eyeStyle.borderWidth = `${width / 15}px`
        glasses.add(eye)

        const iris = new Shape('#994b26', width / 5, width / 5, width/8, height / 10, 50)
        eye.add(iris)

        const pupil = new Shape('black', width / 10, width / 10, height / 23, width / 22, 50)
        iris.add(pupil)

        const mouth = new Shape('', width / 3, height / 6, width / 3.2, height / 2.3, 50)
        mouth.container.style.border = `2px solid transparent`
        mouth.container.style.borderBottomColor = '#b37700'
        this.add(mouth)

        const overall = new Shape('#0A75BC', width, height/2.7, 0, height/1.5, '0 0 50% 50')
        this.add(overall)
    }
}