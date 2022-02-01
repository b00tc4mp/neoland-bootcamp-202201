const landingView = document.querySelector('.landing')
const loginView = document.querySelector('.login')
const registerView = document.querySelector('.register')
const homeView = document.querySelector('.home')
const titleView = homeView.querySelector('.home__user')
const profileView = homeView.querySelector('.profile')
const updatePasswordView = homeView.querySelector('.update-password')
const deleteAccountView = homeView.querySelector('.delete-account')

let activeUser = null

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

    const emailInput = loginForm.querySelector('.login__email-input')
    const passwordInput = loginForm.querySelector('.login__password-input')

    const email = emailInput.value
    const password = passwordInput.value

    try {
        const id = authenticateUser(email, password)
        activeUser = retrieveUser(id)

        emailInput.value = ''
        passwordInput.value = ''

        const homeUser = homeView.querySelector('.home__user')
        homeUser.innerText = `Hello, ${activeUser.name}!`

        loginView.classList.add('off')
        homeView.classList.remove('off')
    } catch (error) {
        alert(error.message)
        passwordInput.value = ''
    }
}

const registerForm = registerView.querySelector('.register__form')
registerForm.onsubmit = event => {
    event.preventDefault()

    const nameInput = registerForm.querySelector('.register__name-input')
    const emailInput = registerForm.querySelector('.register__email-input')
    const passwordInput = registerForm.querySelector('.register__password-input')

    const name = nameInput.value
    const email = emailInput.value
    const password = passwordInput.value

    try {
        registerUser(name, email, password)
        nameInput.value = ''
        emailInput.value = ''
        passwordInput.value = ''

        registerView.classList.add('off')
        loginView.classList.remove('off')
    } catch (error) {
        alert(error.message)
    }
}

const homeLogoutLink = homeView.querySelector('.home__logout-link')
homeLogoutLink.onclick = () => {
    homeView.classList.add('off')
    profileView.classList.add('off')
    titleView.classList.remove('off')
    updatePasswordView.classList.add('off')
    deleteAccountView.classList.add('off')

    landingView.classList.remove('off')
}

const homeHomeLink = homeView.querySelector('.home__home-link')
homeHomeLink.onclick = event => {
    event.preventDefault()
    profileView.classList.add('off')
    updatePasswordView.classList.add('off')
    deleteAccountView.classList.add('off')
    titleView.classList.remove('off')
}

const homeProfileLink = homeView.querySelector('.home__profile-link')
const profileForm = profileView.querySelector('.profile__form')

homeProfileLink.onclick = event => {
    event.preventDefault()

    const nameInput = profileForm.querySelector('.profile__name-input')
    const emailInput = profileForm.querySelector('.profile__email-input')

    nameInput.value = activeUser.name
    emailInput.value = activeUser.email

    updatePasswordView.classList.add('off')
    deleteAccountView.classList.add('off')
    titleView.classList.add('off')
    profileView.classList.remove('off')
}

profileForm.onsubmit = event => {
    event.preventDefault()

    const newName = profileForm.querySelector('.profile__name-input').value
    const newEmail = profileForm.querySelector('.profile__email-input').value
   
    try{
        updateUser(activeUser.id, newName, newEmail)
        const homeUser = homeView.querySelector('.home__user')
        homeUser.innerText = `Hello, ${activeUser.name}!`
        alert('user updated')
    }catch(error){
        alert(error.message)
    }
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

const updatePasswordForm = updatePasswordView.querySelector('.update-password__form')
updatePasswordForm.onsubmit=event=>{
    event.preventDefault()

    const currPasswordInput = updatePasswordForm.querySelector('.update-password__curr-password-input')
    const passwordInput = updatePasswordForm.querySelector('.update-password__password-input')
    const rePasswordInput = updatePasswordForm.querySelector('.update-password__re-password-input')

    const currPassword = currPasswordInput.value
    const password = passwordInput.value
    const rePassword = rePasswordInput.value

    try{
        updateUserPassword(activeUser.id, currPassword, password, rePassword)
        currPasswordInput.value = ''
        passwordInput.value = ''
        rePasswordInput.value = ''

        alert('Password updated')
    }catch(error){
        alert(error.message)
    }
}

const deleteAccountForm = deleteAccountView.querySelector('.delete-account__form')
deleteAccountForm.onsubmit = event => {
    event.preventDefault()

    const passwordInput = deleteAccountForm.querySelector('.delete-account__password')
    const password = passwordInput.value

    try{
        unregisterUser(activeUser.id, password)
        passwordInput.value = ''

        alert('Account Deleted :(')
        homeView.classList.add('off')
        titleView.classList.remove('off')
        profileView.classList.add('off')
        deleteAccountForm.classList.add('off')
        landingView.classList.remove('off')

    } catch(error){
        alert(error.message)
    }
}
