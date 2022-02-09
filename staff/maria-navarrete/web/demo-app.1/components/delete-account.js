const deleteAccountForm = deleteAccountView.querySelector('.delete-account__form')

const deleteAccountPasswordInput = deleteAccountForm.querySelector('.delete-account__password-input')
const deleteAccountToggleIcon = deleteAccountForm.querySelector('.delete-account__toggle-icon')

deleteAccountToggleIcon.onclick = () => {
    const type = deleteAccountPasswordInput.type

    if(type === 'password'){
        deleteAccountToggleIcon.classList.remove('delete-account__toggle-icon--show')
        deleteAccountToggleIcon.classList.add('delete-account__toggle-icon--hide')
        deleteAccountPasswordInput.type = 'text'
    }
    else{
        deleteAccountToggleIcon.classList.add('delete-account__toggle-icon--show')
        deleteAccountToggleIcon.classList.remove('delete-account__toggle-icon--hide')
        deleteAccountPasswordInput.type = 'password'
    }
}

deleteAccountForm.onsubmit = event => {
    event.preventDefault()

    const passwordInput = deleteAccountForm.querySelector('.delete-account__password')
    const password = passwordInput.value

    try {
        unregisterUser(activeUser.id, password)
            .then(()=>{
                passwordInput.value = ''
        
                alert('Account Deleted :(')
                homeView.classList.add('off')
                titleView.classList.remove('off')
                profileView.classList.add('off')
                deleteAccountView.classList.add('off')
                landingView.classList.remove('off')
            })
            .catch(error=> alert(error.getmessage))

    } catch (error) {
        alert(error.message)
        passwordInput.value = ''
    }
}

const deleteAccountBackLink = deleteAccountView.querySelector('.delete-account__back-link')
deleteAccountBackLink.onclick = event => {
    event.preventDefault()

    deleteAccountView.classList.add('off')
    profileView.classList.remove('off')
}