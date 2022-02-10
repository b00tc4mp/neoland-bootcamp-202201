const homeLogoutButton = homeView.querySelector('.home__logout-button')

homeLogoutButton.onclick = () => {
    homeView.classList.add('off')
    profileView.classList.add('off')
    updatePasswordView.classList.add('off')
    deleteAccountView.classList.add('off')

    landingView.classList.remove('off')
}

const homeProfileLink = homeView.querySelector('.home__profile-link')

homeProfileLink.onclick = event => {
    event.preventDefault()

    const profileNameInput = profileView.querySelector('.profile__name-input')
    const profileSurnameInput = profileView.querySelector('.profile__surname-input')
    const profileEmailInput = profileView.querySelector('.profile__email-input')

    try {
        retrieveUser(userToken)
            .then(user => {
                profileNameInput.value = user.name
                profileSurnameInput.value = user.surname
                profileEmailInput.value = user.email
            
                searchView.classList.add('off')
                updatePasswordView.classList.add('off')
                deleteAccountView.classList.add('off')
            
                profileView.classList.remove('off')
            })
            .catch(error => alert(error.message))
    } catch(error) {
        alert(error.message)
    }
}

const homeHomeLink = homeView.querySelector('.home__home-link')

homeHomeLink.onclick = event => {
    event.preventDefault()

    profileView.classList.add('off')
    searchView.classList.remove('off')
}