const registerLoginLink = registerView.querySelector('.register__login-link')

registerLoginLink.onclick = e => {
    e.preventDefault()

    registerView.classList.add('off')

    loginView.classList.remove('off')
}

const registerForm = registerView.querySelector('.register__form')

registerForm.onsubmit = e => {
    e.preventDefault()

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