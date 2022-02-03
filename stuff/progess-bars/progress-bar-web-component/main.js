class ProgressBar extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.classList.add('progress')

        const bar = document.createElement('div')
        bar.classList.add('progress__bar')

        const value = this.getAttribute('value')

        if (value < 45)
            this.classList.add('progress--low')
        else if (value < 80)
            this.classList.add('progress--medium')
        else
            this.classList.add('progress--high')

        bar.style.width = `${value}%`
        bar.innerHTML = '&nbsp;'

        this.append(bar)
    }
}

customElements.define('progress-bar', ProgressBar)