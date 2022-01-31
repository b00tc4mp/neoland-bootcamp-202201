const landingView = document.querySelector('.landing')
const loginView = document.querySelector('.login')
const registerView = document.querySelector('.register')
const homeView = document.querySelector('.home')

const landingLoginLink = landingView.querySelector('.landing__login')
const landingRegisterLink = landingView.querySelector('.landing__register')

// const landingLogout = landingView.querySelector('.landing__logout-button')
const homeLogoutButton = homeView.querySelector('.home__logout-button')

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

const loginRegisterLink = loginView.querySelector('.login__register-link')

loginRegisterLink.onclick = event => {
    event.preventDefault()

    loginView.classList.add('off')
    registerView.classList.remove('off')
}

const registerLoginLink = registerView.querySelector('.register__login-link')

registerLoginLink.onclick = event => {
    event.preventDefault()

    registerView.classList.add('off')
    loginView.classList.remove('off')
}

const loginForm = loginView.querySelector('.login__form')

loginForm.onsubmit = event => {
    event.preventDefault()

    const emailInput = loginForm.querySelector('.login__email')
    const passwordInput = loginForm.querySelector('.login__password')

    const email = emailInput.value
    const password = passwordInput.value

    const id = authenticateUser(email, password)

    if (id) {
        const user = retrieveUser(id)

        const homeWelcome = homeView.querySelector('.home__welcome')
        homeWelcome.innerText = `Hello, ${user.name}!`

        loginView.classList.add('off')
        homeView.classList.remove('off')
    } else alert('wrong credentials')
}

const registerForm = registerView.querySelector('.register__form')

registerForm.onsubmit = event => {
    event.preventDefault()

    const nameInput = registerForm.querySelector('.register__name')
    const surnameInput = registerForm.querySelector('.register__surname')
    const emailInput = registerForm.querySelector('.register__email')
    const passwordInput = registerForm.querySelector('.register__password')
    
    const name = nameInput.value
    const surname = surnameInput.value
    const email = emailInput.value
    const password = passwordInput.value

    registerUser(name, surname, email, password)

    registerView.classList.add('off')

    loginView.classList.remove('off')
}


homeLogoutButton.onclick = event => {
    event.preventDefault()

    homeView.classList.add('off')
    landingView.classList.remove('off')

}