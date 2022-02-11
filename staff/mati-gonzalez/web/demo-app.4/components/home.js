const homeLogoutButton = homeView.querySelector('.home__logout-button')

homeLogoutButton.onclick = () => {
    homeView.classList.add('off')
    profileView.classList.add('off')
    updatePasswordView.classList.add('off')
    deleteAccountView.classList.add('off')

    landingView.classList.remove('off')
}

const homePorfileLink = homeView.querySelector('.home__profile-link')

homePorfileLink.onclick = e => {
    e.preventDefault()

    const profileNameINput = profileView.querySelector('.profile__name-input')
    const profileSurnameInput = profileView.querySelector('.profile__surname-input')
    const profileEmailInput = profileView.querySelector('.profile__email-input')

    try {
        retrieveUser(userToken)
            .then(user => {
                profileNameINput.value = user.name
                profileSurnameInput.value = user.surname
                profileEmailInput.value = user.email

                searchView.classList.add('off')
                updatePasswordView.classList.add('off')
                deleteAccountView.classList.add('off')

                profileView.classList.remove('off')
            })
            .catch(error.message)
    } catch(error) {
        alert(error.message)
    }
}

const homeHomeLink = homeView.querySelector('.home__home-link')

homeHomeLink.onclick = e => {
    e.preventDefault()

    profileView.classList.add('off')
    searchView.classList.remove('off')
}