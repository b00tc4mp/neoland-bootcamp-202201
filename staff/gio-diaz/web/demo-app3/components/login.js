const loginRegisterLink = loginView.querySelector('.login__register-link')

loginRegisterLink.onclick = event => {
    event.preventDefault()

    loginView.classList.add('off')

    registerView.classList.remove('off')
}

const loginForm = loginView.querySelector('.login__form')

loginForm.onsumit = event => {
    event.preventDefault()

    const emailInput = loginForm.querySelector('.login__email-input')
    const passwordInput = loginForm.querySelector('.login__password-item')

    const email = emailInput.value
    const password = passwordInput.value

    try {
        authenticatedUser(email, password)
        .then(token => {
            userTken = token

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
            passwordFeedback.classList.add('off')

            const feedback = loginForm.querySelector('.login__feedback')
            feedback.classList.add('off')

            loginView.classList.add('off')

            homeView.classList.remove('off')
        })
        .catch(error => alert(error.message))
    } catch (error) {
        //alert(error.message)

        // const message = error.message
        const { message } = error

    }









        })
    }
}