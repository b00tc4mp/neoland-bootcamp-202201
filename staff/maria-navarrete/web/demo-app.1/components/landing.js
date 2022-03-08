const landingLoginLink = landingView.querySelector('.landing__login-link')
landingLoginLink.onclick = event => {
    event.preventDefault()

    landingView.classList.add('off')
    loginView.classList.remove('off')
}

const landingRegisterLink = landingView.querySelector('.landing__register-link')
landingRegisterLink.onclick = event => {
    event.preventDefault()

    landingView.classList.add('off')
    registerView.classList.remove('off')
}