const landingView = document.querySelector('.landing')
const loginView = document.querySelector('.login')
const registerView = document.querySelector('.register')
const homeView = document.querySelector('.home')
const profileView = document.querySelector('.profile')
const updatePasswordView = document.querySelector('.update-password')
const deleteAccountView = document.querySelector('.delete-account')

landingView.classList.remove('off')
// loginView.classList.remove('off')

const landingLoginLink = landingView.querySelector('.landing__login')
const landingRegisterLink = landingView.querySelector('.landing__register')

let userId

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

loginForm.addEventListener('submit', event => {
    // ...
})

loginForm.onsubmit = event => {
    event.preventDefault()

    const emailInput = loginForm.querySelector('.login__email-input')
    const passwordInput = loginForm.querySelector('.login__password-input')

    const email = emailInput.value
    const password = passwordInput.value

    try {
        userId = authenticateUser(email, password)

        const user = retrieveUser(userId)

        const homeUser = homeView.querySelector('.home__user')
        homeUser.innerText = user.name

        emailInput.value = ''
        passwordInput.value = ''

        emailInput.classList.remove('login__input--error')

        const emailFeedback = loginForm.querySelector('.login__email-feedback')
        emailFeedback.classList.add('off')

        passwordInput.classList.remove('login__input--error')

        const passwordFeedback = loginForm.querySelector('.login__password-feedback')
        passwordFeedback.classList.add('off')

        const feedback = loginForm.querySelector('.login__feedback')
        feedback.classList.add('off')

        loginView.classList.add('off')

        homeView.classList.remove('off')
    } catch (error) {
        //alert(error.message)

        // const message = error.message
        const { message } = error

        if (message.includes('email')) {
            emailInput.classList.add('login__input--error')

            const emailFeedback = loginForm.querySelector('.login__email-feedback')
            emailFeedback.innerText = message

            const passwordFeedback = loginForm.querySelector('.login__password-feedback')
            passwordFeedback.classList.add('off')
            passwordInput.classList.remove('login__input--error')

            const feedback = loginForm.querySelector('.login__feedback')
            feedback.classList.add('off')

            emailFeedback.classList.remove('off')
        } else if (message.includes('password')) {
            emailInput.classList.remove('login__input--error')

            const emailFeedback = loginForm.querySelector('.login__email-feedback')
            emailFeedback.classList.add('off')
            passwordInput.classList.add('login__input--error')

            const passwordFeedback = loginForm.querySelector('.login__password-feedback')
            passwordFeedback.innerText = message
            passwordFeedback.classList.remove('off')
        } else {
            emailInput.classList.remove('login__input--error')

            const emailFeedback = loginForm.querySelector('.login__email-feedback')
            emailFeedback.classList.add('off')

            passwordInput.classList.remove('login__input--error')

            const passwordFeedback = loginForm.querySelector('.login__password-feedback')
            passwordFeedback.classList.add('off')

            const feedback = loginForm.querySelector('.login__feedback')
            feedback.innerText = message
            feedback.classList.remove('off')
        }

        passwordInput.value = ''
    }
}

const registerForm = registerView.querySelector('.register__form')

registerForm.onsubmit = event => {
    event.preventDefault()

    const nameInput = registerForm.querySelector('.register__name-input')
    const surnameInput = registerForm.querySelector('.register__surname-input')
    const emailInput = registerForm.querySelector('.register__email-input')
    const passwordInput = registerForm.querySelector('.register__password-input')

    const name = nameInput.value
    const surname = surnameInput.value
    const email = emailInput.value
    const password = passwordInput.value

    try {
        registerUser(name, surname, email, password)

        nameInput.value = ''
        surnameInput.value = ''
        emailInput.value = ''
        passwordInput.value = ''

        registerView.classList.add('off')

        loginView.classList.remove('off')
    } catch (error) {
        alert(error.message)
    }
}

const homeLogoutButton = homeView.querySelector('.home__logout-button')

homeLogoutButton.onclick = () => {
    homeView.classList.add('off')
    profileView.classList.add('off')
    updatePasswordView.classList.add('off')
    deleteAccountView.classList.add('off')

    landingView.classList.remove('off')
}

const homeProfileLink = homeView.querySelector('.home__profile-link')

homeProfileLink.onclick = event => {
    event.preventDefault()

    const profileNameInput = profileView.querySelector('.profile__name-input')
    const profileSurnameInput = profileView.querySelector('.profile__surname-input')
    const profileEmailInput = profileView.querySelector('.profile__email-input')

    const user = retrieveUser(userId)

    profileNameInput.value = user.name
    profileSurnameInput.value = user.surname
    profileEmailInput.value = user.email

    updatePasswordView.classList.add('off')
    deleteAccountView.classList.add('off')

    profileView.classList.remove('off')
}

const homeHomeLink = homeView.querySelector('.home__home-link')

homeHomeLink.onclick = event => {
    event.preventDefault()

    profileView.classList.add('off')
}

const profileUpdatePasswordLink = profileView.querySelector('.profile__update-password-link')

profileUpdatePasswordLink.onclick = event => {
    event.preventDefault()

    profileView.classList.add('off')

    updatePasswordView.classList.remove('off')
}

const updatePasswordBackLink = updatePasswordView.querySelector('.update-password__back-link')

updatePasswordBackLink.onclick = event => {
    event.preventDefault()

    updatePasswordView.classList.add('off')

    profileView.classList.remove('off')
}


const profileDeleteAccountLink = profileView.querySelector('.profile__delete-account-link')

profileDeleteAccountLink.onclick = event => {
    event.preventDefault()

    profileView.classList.add('off')

    deleteAccountView.classList.remove('off')
}

const deleteAccountBackLink = deleteAccountView.querySelector('.delete-account__back-link')

deleteAccountBackLink.onclick = event => {
    event.preventDefault()

    deleteAccountView.classList.add('off')

    profileView.classList.remove('off')
}

const profileForm = profileView.querySelector('.profile__form')

profileForm.onsubmit = event => {
    event.preventDefault()

    const nameInput = profileForm.querySelector('.profile__name-input')
    const surnameInput = profileForm.querySelector('.profile__surname-input')
    const emailInput = profileForm.querySelector('.profile__email-input')

    const name = nameInput.value
    const surname = surnameInput.value
    const email = emailInput.value

    try {
        updateUser(userId, name, surname, email)

        alert('user updated')
    } catch (error) {
        alert(error.message)
    }
}

const updatePasswordForm = updatePasswordView.querySelector('.update-password__form')

updatePasswordForm.onsubmit = event => {
    event.preventDefault()

    const currPasswordInput = updatePasswordForm.querySelector('.update-password__curr-password-input')
    const passwordInput = updatePasswordForm.querySelector('.update-password__password-input')
    const rePasswordInput = updatePasswordForm.querySelector('.update-password__re-password-input')

    const currPassword = currPasswordInput.value
    const password = passwordInput.value
    const rePassword = rePasswordInput.value

    try {
        updateUserPassword(userId, currPassword, password, rePassword)

        currPasswordInput.value = ''
        passwordInput.value = ''
        rePasswordInput.value = ''

        alert('password udpated')
    } catch (error) {
        alert(error.message)
    }
}

const deleteAccountForm = deleteAccountView.querySelector('.delete-account__form')

deleteAccountForm.addEventListener('submit', event => {
    event.preventDefault()

    const passwordInput = deleteAccountForm.querySelector('.delete-account__password-input')

    const password = passwordInput.value

    try {
        unregisterUser(userId, password)

        passwordInput.value = ''

        deleteAccountView.classList.add('off')

        profileView.classList.add('off')

        homeView.classList.add('off')

        landingView.classList.remove('off')
    } catch (error) {
        alert(error.message)

        passwordInput.value = ''
    }
})