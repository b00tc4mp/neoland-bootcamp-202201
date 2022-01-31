const landingView = document.querySelector('.landing')
const landingLoginLink = landingView.querySelector('.landing__login')
const landingRegisterLink = landingView.querySelector('.landing__register')


const loginView = document.querySelector('.login')
const loginRegisterLink = loginView.querySelector('.login__register-link')
const loginForm = loginView.querySelector('.login__form')

const registerView = document.querySelector('.register')
const registerLoginLink = registerView.querySelector('.register__login-link')
const registerForm = registerView.querySelector('.register__form')

const homeView = document.querySelector('.home')
const homeLinkHome = homeView.querySelector('.nav__home')
const profileLinkHome = homeView.querySelector('.nav__profile')
const logoutLinkHome = homeView.querySelector('.nav__logout')
const titleView = homeView.querySelector('.home__welcome')

const profileView = homeView.querySelector('.profile')
const profileForm = profileView.querySelector('.profile__form')
const profileDelete = profileView.querySelector('.profile__delete')

let activeUser = null

landingLoginLink.onclick = event => {
    event.preventDefault()

    loginForm.querySelector('.login__email').value=""
    loginForm.querySelector('.login__password').value=""

    landingView.classList.add('off')
    loginView.classList.remove('off')
}

landingRegisterLink.onclick = event => {
    event.preventDefault()

    registerForm.querySelector('.register__name').value = ""
    registerForm.querySelector('.register__surname').value = ""
    registerForm.querySelector('.register__email').value = ""
    registerForm.querySelector('.register__password').value = ""

    landingView.classList.add('off')
    registerView.classList.remove('off')
}

loginRegisterLink.onclick = event => {
    event.preventDefault()

    registerForm.querySelector('.register__name').value = ""
    registerForm.querySelector('.register__surname').value = ""
    registerForm.querySelector('.register__email').value = ""
    registerForm.querySelector('.register__password').value = ""

    loginView.classList.add('off')
    registerView.classList.remove('off')
}

loginForm.onsubmit = event => {
    event.preventDefault()

    const emailInput = loginForm.querySelector('.login__email')
    const passwordInput = loginForm.querySelector('.login__password')

    const email = emailInput.value
    const password = passwordInput.value

    const id = authenticateUser(email, password)

    if (id) {
        activeUser = retrieveUser(id)

        const homeWelcome = homeView.querySelector('.home__welcome')
        homeWelcome.innerText = `Hello, ${activeUser.name}!`

        loginView.classList.add('off')
        homeView.classList.remove('off')
    }
    else alert('wrong credentials')
}

registerLoginLink.onclick = event => {
    event.preventDefault()

    loginForm.querySelector('.login__email').value=""
    loginForm.querySelector('.login__password').value=""

    registerView.classList.add('off')
    loginView.classList.remove('off')
}

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

homeLinkHome.onclick = event => {
    event.preventDefault()

    profileView.classList.add('off')
    titleView.classList.remove('off')
}

logoutLinkHome.onclick = event => {
    event.preventDefault()

    homeView.classList.add('off')
    landingView.classList.remove('off')
    profileView.classList.add('off')
    titleView.classList.remove('off')
}

profileLinkHome.onclick = event => {
    event.preventDefault()

    const nameInput = profileForm.querySelector('.profile__name-input')
    const surnameInput = profileForm.querySelector('.profile__surname-input')
    const emailInput = profileForm.querySelector('.profile__email-input')
    const passwordInput = profileForm.querySelector('.profile__password-input')

    nameInput.value = activeUser.name
    surnameInput.value = activeUser.surname
    emailInput.value = activeUser.email
    passwordInput.value = ""


    titleView.classList.add('off')
    profileView.classList.remove('off')
}

profileForm.onsubmit = event => {
    event.preventDefault()

    const newName = profileForm.querySelector('.profile__name-input').value
    const newSurname = profileForm.querySelector('.profile__surname-input').value
    const newEmail = profileForm.querySelector('.profile__email-input').value
    const password = profileForm.querySelector('.profile__password-input').value
    const newPassword = profileForm.querySelector('.profile__new-password-input').value
    const newPasswordConfirmation = profileForm.querySelector('.profile__new-password-conf-input').value

    if (activeUser.password === password) {
        if (!newPassword) {
            updateUser(activeUser.id, newName, newSurname, newEmail, activeUser.password)
            alert('Data updated succesfully!')
        }
        else {
            if (newPassword === newPasswordConfirmation) {
                updateUser(activeUser.id, newName, newSurname, newEmail, newPassword)
                alert('Data updated succesfully!')
            }
            else
                alert('New password must match!')
        }
    }
    else alert('Please confirm your current password')
}

profileDelete.onclick = event => {
    event.preventDefault()

    const password = profileForm.querySelector('.profile__password-input').value

    if (activeUser.password === password) {
        unregisterUser(activeUser.id, password)
        alert('Account Deleted :(')

        homeView.classList.add('off')
        landingView.classList.remove('off')
        profileView.classList.add('off')
        titleView.classList.remove('off')
    }
    else alert('Please confirm your current password')
}
