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

    const profileFullnameInput = profileView.querySelector('.profile__fullname-input')
    const profileEmailInput = profileView.querySelector('.profile__email-input')

    try {
        retrieveUser(userToken)
            .then(user => {
                profileFullnameInput.value = user.fullname
                
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