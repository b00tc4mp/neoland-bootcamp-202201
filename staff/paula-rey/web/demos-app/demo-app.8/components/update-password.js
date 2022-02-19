const updatePasswordBackLink = updatePasswordView.querySelector('.update-password__back-link')

updatePasswordBackLink.onclick = event => {
    event.preventDefault()

    updatePasswordView.classList.add('off')

    profileView.classList.remove('off')
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
        updateUserPassword(userToken, currPassword, password, rePassword)
            .then(() => {

                currPasswordInput.value = ''
                passwordInput.value = ''
                rePasswordInput.value = ''
    
                alert('password udpated')
            })
            // .cath(error => alert(error.message)) /*forma de Manu pero a mi me da error*/

    } catch (error) {
        alert(error.message)
    }
}