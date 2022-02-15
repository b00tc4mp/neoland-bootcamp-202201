const profileUpdatePasswordLink = profileView.querySelector('.profile__update-password-link')

profileUpdatePasswordLink.onclick = event => {
    event.preventDefault()

    profileView.classList.add('off')

    updatePasswordView.classList.remove('off')
}

const profileDeleteAccountLink = profileView.querySelector('.profile__delete-account-link')

profileDeleteAccountLink.onclick = event => {
    event.preventDefault()

    profileView.classList.add('off')

    deleteAccountView.classList.remove('off')
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