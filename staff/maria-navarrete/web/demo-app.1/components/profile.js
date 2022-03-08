const profileForm = profileView.querySelector('.profile__form')
profileForm.onsubmit = event => {
    event.preventDefault()

    const newName = profileForm.querySelector('.profile__name-input').value
    const newEmail = profileForm.querySelector('.profile__email-input').value

    try {
        updateUser(userToken, newName, newEmail)
            .then(()=> alert('user updated'))
            .catch(error=> alert(error.getmessage))
    } catch (error) {
        alert(error.message)
    }
}

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