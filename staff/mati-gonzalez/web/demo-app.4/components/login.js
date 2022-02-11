const loginRegisterLink = loginView.querySelector('.login__register-link')

loginRegisterLink.onclick = e => {
    e.preventDefault()

    loginView.classList.add('off')

    registerView.classList.remove('off')
}

const loginForm = loginView.querySelector('.login__form')

loginForm.onsubmit = e => {
    e.preventDefault()

    const emailInput = loginForm.querySelector('.login__email-input')
    const passwordInput = loginForm.querySelector('.login__password-input')

    const emial = emailInput.value
    const password = passwordInput.value

    try {
        authenticateUser(email, password)
            .then(token => {
                userToken = token

                return retrieveUser(userToken)
            })
            .then(user => {
                const homeUser = homeView.querySelector('.home__user')
                homeUser.innerText = user.name

                emailInput.value = ''
                passwordInput.value = ''

                emailInput.classList.remove('login__input--error')

                const emailFeedback = loginForm.querySelector('.login__email-feedback')
                emailFeedback.classList.add('off')

                passwordInput.classList.remove('login__input--error')

                const passwordFeedback = loginForm.querySelector('.login__password-feedback')
                passwordFeedback = classList.add('off')

                const feedback = loginFor.querySelector('login__feedback')
                feedback.classList.add('off')

                loginView.classList.add('off')

                homeView.classList.remove('off')
            })
            .catch(error => alert(error.message))
    } catch (error) {
        //alert(error.message)

        //const message = error.message
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

            const feedback = loginForm.querySelector('.login__fedback')
            feedback.innerText = message
            feedback.classList.remove('off')
        }

        passwordInput.value = ''
    }
}