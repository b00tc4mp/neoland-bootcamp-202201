const loginForm = loginView.querySelector('.login__form')

const loginPasswordInput = loginForm.querySelector('.login__password-input')
const loginToggleIcon = loginForm.querySelector('.login__toggle-icon')

loginToggleIcon.onclick = () => {
    const type = loginPasswordInput.type

    if(type === 'password'){
        loginToggleIcon.classList.remove('login__toggle-icon--show')
        loginToggleIcon.classList.add('login__toggle-icon--hide')
        loginPasswordInput.type = 'text'
    }
    else{
        loginToggleIcon.classList.add('login__toggle-icon--show')
        loginToggleIcon.classList.remove('login__toggle-icon--hide')
        loginPasswordInput.type = 'password'
    }
}

const passwordInput = loginForm.querySelector('.login__password-input')
passwordInput.addEventListener('keyup', function(event){
    const passwordCapsStatus = loginForm.querySelector('.login__password-caps-status')
    
    if(event.getModifierState('CapsLock'))
        passwordCapsStatus.classList.remove('off')
    
    else
        passwordCapsStatus.classList.add('off')    
})


loginForm.onsubmit = event => {
    event.preventDefault()

    const emailInput = loginForm.querySelector('.login__email-input')
    const passwordInput = loginForm.querySelector('.login__password-input')

    const email = emailInput.value
    const password = passwordInput.value
    
    const emailFeedback = loginForm.querySelector('.login__email-feedback')
    const passwordFeedback = loginForm.querySelector('.login__password-feedback')
    const feedback = loginForm.querySelector('.login__feedback')
    
    try {
        const id = authenticateUser(email, password)
        activeUser = retrieveUser(id)

        const homeUser = homeView.querySelector('.home__user')
        homeUser.innerText = `Hello, ${activeUser.name}!`

        emailInput.value = ''
        passwordInput.value = ''

        emailInput.classList.remove('login__input--error')
        emailFeedback.classList.add('off')

        passwordInput.classList.remove('login__input--error')
        passwordFeedback.classList.add('off')

        feedback.classList.add('off')

        loginView.classList.add('off')
        homeView.classList.remove('off')
    } catch (error) {

        const { message } = error

        if (message.includes('email')) {
            emailInput.classList.add('login__input--error')
            emailFeedback.innerText = message

            passwordFeedback.classList.add('off')
            passwordInput.classList.remove('login__input--error')

            feedback.classList.add('off')

            emailFeedback.classList.remove('off')
        }

        else if (message.includes('password')) {
            emailInput.classList.remove('login__input--error')
            emailFeedback.classList.add('off')
            
            passwordInput.classList.add('login__input--error')
            passwordFeedback.innerText = message
            passwordFeedback.classList.remove('off')
        }

        else{  
            emailInput.classList.remove('login__input--error')
            emailFeedback.classList.add('off')
            
            passwordInput.classList.remove('login__input--error')
            passwordFeedback.classList.add('off')

            feedback.innerText = message
            feedback.classList.remove('off')
        }
        passwordInput.value = ''
    }
}

const loginRegisterLink = loginView.querySelector('.login__register-link')
loginRegisterLink.onclick = event => {
    event.preventDefault()

    const emailInput = loginForm.querySelector('.login__email-input')
    const passwordInput = loginForm.querySelector('.login__password-input')
    emailInput.value = ''
    passwordInput.value = ''

    loginView.classList.add('off')
    registerView.classList.remove('off')
}