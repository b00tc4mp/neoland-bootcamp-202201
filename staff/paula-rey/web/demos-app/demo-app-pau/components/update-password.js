const updatePasswordForm = updatePasswordView.querySelector('.update-password__form')

const updatePasswordCurrPasswordInput = updatePasswordForm.querySelector('.update-password__curr-password-input')
const updatePasswordCurrPasswordToggleIcon = updatePasswordForm.querySelector('.curr-password__toggle-icon')
updatePasswordCurrPasswordToggleIcon.onclick = () => {
    const type = updatePasswordCurrPasswordInput.type

    if(type === 'password'){
        updatePasswordCurrPasswordToggleIcon.classList.remove('curr-password__toggle-icon--show')
        updatePasswordCurrPasswordToggleIcon.classList.add('curr-password__toggle-icon--hide')
        updatePasswordCurrPasswordInput.type = 'text'
    }
    else{
        updatePasswordCurrPasswordToggleIcon.classList.add('curr-password__toggle-icon--show')
        updatePasswordCurrPasswordToggleIcon.classList.remove('curr-password__toggle-icon--hide')
        updatePasswordCurrPasswordInput.type = 'password'
    }
}

const updatePasswordPasswordInput = updatePasswordForm.querySelector('.update-password__password-input')
const updatePasswordPasswordToggleIcon = updatePasswordForm.querySelector('.password__toggle-icon')
updatePasswordPasswordToggleIcon.onclick = () => {
    const type = updatePasswordPasswordInput.type

    if(type === 'password'){
        updatePasswordPasswordToggleIcon.classList.remove('password__toggle-icon--show')
        updatePasswordPasswordToggleIcon.classList.add('password__toggle-icon--hide')
        updatePasswordPasswordInput.type = 'text'
    }
    else{
        updatePasswordPasswordToggleIcon.classList.add('password__toggle-icon--show')
        updatePasswordPasswordToggleIcon.classList.remove('password__toggle-icon--hide')
        updatePasswordPasswordInput.type = 'password'
    }
}

const updatePasswordRePasswordInput = updatePasswordForm.querySelector('.update-password__re-password-input')
const updatePasswordRePasswordToggleIcon = updatePasswordForm.querySelector('.re-password__toggle-icon')
updatePasswordRePasswordToggleIcon.onclick = () => {
    const type = updatePasswordRePasswordInput.type

    if(type === 'password'){
        updatePasswordRePasswordToggleIcon.classList.remove('re-password__toggle-icon--show')
        updatePasswordRePasswordToggleIcon.classList.add('re-password__toggle-icon--hide')
        updatePasswordRePasswordInput.type = 'text'
    }
    else{
        updatePasswordRePasswordToggleIcon.classList.add('re-password__toggle-icon--show')
        updatePasswordRePasswordToggleIcon.classList.remove('re-password__toggle-icon--hide')
        updatePasswordRePasswordInput.type = 'password'
    }
}



updatePasswordForm.onsubmit = event => {
    event.preventDefault()

    const currPasswordInput = updatePasswordForm.querySelector('.update-password__curr-password-input')
    const passwordInput = updatePasswordForm.querySelector('.update-password__password-input')
    const rePasswordInput = updatePasswordForm.querySelector('.update-password__re-password-input')
    
    const currPassword = currPasswordInput.value
    const password = passwordInput.value
    const rePassword = rePasswordInput.value

    try {
        updateUserPassword(userId, currPassword, password, rePassword)

        currPasswordInput.value = ''
        passwordInput.value = ''
        rePasswordInput.value = ''
        
        alert('password udpated')
    } catch (error) {
        alert(error.message)
    }
}

const updatePasswordBackLink = updatePasswordView.querySelector('.update-password__back-link')

updatePasswordBackLink.onclick = event => {
    event.preventDefault()

    updatePasswordView.classList.add('off')

    profileView.classList.remove('off')
}
