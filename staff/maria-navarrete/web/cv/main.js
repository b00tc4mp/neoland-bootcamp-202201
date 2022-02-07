const detailsLinks = document.querySelectorAll('.experience__show-details')

detailsLinks.forEach(link => {
    link.onclick = event =>{
        event.preventDefault()

        const linkStatus = link.innerText
        const detailBlock = link.nextElementSibling

        if(linkStatus === "+"){
            detailBlock.classList.remove('off')
            link.innerText = "-"
        }
        else{   
            detailBlock.classList.add('off')
            link.innerText = "+"
        }
    }
})

const contactForm = document.querySelector('.contact-form')

contactForm.onsubmit = event =>{
    event.preventDefault()

    contactForm.innerHTML = `<p class="contact-form__submitted-text">Gracias por tu mensaje!
                            <br>
                            Te responderé en breve :)</p>`
}

