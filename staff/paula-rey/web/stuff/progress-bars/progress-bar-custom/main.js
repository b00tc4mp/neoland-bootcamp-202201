const passwordInput = document.querySelector('.password-input')
const levelBar = document.querySelector('.level-bar')

passwordInput.addEventListener('keyup', event => {
    const password = passwordInput.value

    const { length } = password

    if (length === 0) {
        levelBar.value = 100
    } else if (length < 5) {
        levelBar.value = 75
    } else if (length >= 5 && length < 8) {
        levelBar.value = 50
    } else if (length >= 8 && length < 10) {
        levelBar.value = 25
    } else {
        levelBar.value = 0
    }
})