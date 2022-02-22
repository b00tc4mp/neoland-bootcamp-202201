const updatePasswordBackLink = updatePasswordView.querySelector('.update-password__back-link')

updatePasswordBackLink.onclick = e => {
    e.preventDefault()

    updatePasswordView.classList.add('off')

    profileView.classList.remove('off')
}

const updatePasswordForm = updatePasswordView.querySelector('.update-password__form')

updatePasswordForm.onsubmit = e => {
    e.preventDefault()

    const currPasswordInput = updatePasswordForm.querySelector('.update-password__curr-password-input')
    const passwordInput = updatePasswordForm.querySelector('.update-password__password-input')
    const rePasswordInput = updatePasswordForm.querySelector('.update-password__re-password-input')

    const currPassword = currPAsswordInput.value
    const password = passwordInput.value
    const rePassword = rePasswordInput.value


    try {

        currPasswordInput.addEventListener("keyup", e => {
            if (e.getModifierState(CapsLock)) {
                throw new Error('Caps Lock Active !!')
            }
        })

        passwordInput.addEventListener("keyup", e => {
            if (e.getModifierState(CapsLock)) {
                throw new Error('Caps Lock Active !!')
            }
        })

        rePasswordInput.addEventListener("keyup", e => {
            if (e.getModifierState(CapsLock)) {
                throw new Error('Caps Lock Active !!')
            }
        })

        updateUserPassword(userId, currPassword, password, rePassword)

        currPasswordInput.value = ''
        passwordInput.value = ''
        rePasswordInput.value =''

        alert('password updatet')
    } catch (error) {
        alert(error.message)
    }
}