// TOGGLE EYE IN PASSWORD
const toggleEye = document.querySelectorAll(".password-component")

toggleEye.forEach(component => {
    const eye = component.querySelector("i")
    const input = component.querySelector("input")

    eye.onclick = () => {
        const type = input.getAttribute("type")
        if (type === "password") {
            input.setAttribute("type", "text")
            eye.classList.remove("bi-eye-slash")
            eye.classList.add("bi-eye")
        } else {
            input.setAttribute("type", "password")
            eye.classList.add("bi-eye-slash")
            eye.classList.remove("bi-eye")
        }
    }
} )
// END OF TOGGLE EYE IN PASSWORD