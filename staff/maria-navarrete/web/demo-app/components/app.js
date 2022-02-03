//views
const landingView = document.querySelector('.landing')
const loginView = document.querySelector('.login')
const registerView = document.querySelector('.register')
const homeView = document.querySelector('.home')
const titleView = homeView.querySelector('.home__user')
const profileView = homeView.querySelector('.profile')
const updatePasswordView = homeView.querySelector('.update-password')
const deleteAccountView = homeView.querySelector('.delete-account')

//state
let activeUser = null