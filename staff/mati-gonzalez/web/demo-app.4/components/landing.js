const landingLoginLink = landingView.querySelector('.landing__login')
const landingRegisterLink = landingView.querySelector('.landing__register')

landingLoginLink.onclick = e => {
    e.preventDefault()

    landingView.classList.add('off')
    loginView.classList.remove('off')
}

landingRegisterLink.onclick = e => {
    e.preventDefault()

    landingView.classList.add('off')
    registerView.classList.remove('off')
}