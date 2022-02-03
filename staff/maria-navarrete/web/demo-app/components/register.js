const registerForm = registerView.querySelector('.register__form')

const registerPasswordInput = registerForm.querySelector('.register__password-input')
const registerToggleIcon = registerView.querySelector('.register__toggle-icon')

registerToggleIcon.onclick = () => {
    const type = registerPasswordInput.getAttribute('type') === 'password' ? 'text' : 'password'
    registerPasswordInput.setAttribute('type', type)

    registerToggleIcon.classList.toggle('bi-eye')
}

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

const registerLoginLink = registerView.querySelector('.register__login-link')
registerLoginLink.onclick = event => {
    event.preventDefault()

    const nameInput = registerForm.querySelector('.register__name-input')
    const emailInput = registerForm.querySelector('.register__email-input')
    const passwordInput = registerForm.querySelector('.register__password-input')

    nameInput.value = ''
    emailInput.value = ''
    passwordInput.value = ''

    registerView.classList.add('off')
    loginView.classList.remove('off')
}