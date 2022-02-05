const deleteAccountBackLink = deleteAccountView.querySelector('.delete-account__back-link')

deleteAccountBackLink.onclick = event => {
    event.preventDefault()

    deleteAccountView.classList.add('off')

    profileView.classList.remove('off')
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