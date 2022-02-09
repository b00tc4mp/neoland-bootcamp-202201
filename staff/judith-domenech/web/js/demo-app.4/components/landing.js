const landingLoginLink = landingView.querySelector('.landing__login')
const landingRegisterLink = landingView.querySelector('.landing__register')

landingLoginLink.onclick = event => {
    event.preventDefault()

    landingView.classList.add('off')
    loginView.classList.remove('off')
}

landingRegisterLink.onclick = event => {
    event.preventDefault()

    landingView.classList.add('off')
    registerView.classList.remove('off')
}