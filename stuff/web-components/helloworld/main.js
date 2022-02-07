class HelloWorld extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.innerText = 'Hello, World!'
    }
}

customElements.define('hello-world', HelloWorld)

// SEE https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/define
class HellOh extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        const to = this.getAttribute('to')

        this.innerText = `Hell-Oh, ${to}!`
    }
}

customElements.define('hell-oh', HellOh)