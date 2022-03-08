const contactForm = document.querySelector('.contact-form')

contactForm.onsubmit = event =>{
    event.preventDefault()

    contactForm.innerHTML = `<p class="contact-form__submitted-text">Gracias por tu mensaje!
                            <br>
                            Te responderé en breve :)</p>`
}

