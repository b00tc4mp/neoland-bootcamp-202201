const passwordComponents = document.querySelectorAll(".password-component");

passwordComponents.forEach((component) => {
  const eye = component.querySelector("i");
  const input = component.querySelector("input");

  eye.onclick = () => {
    const type = input.getAttribute("type");
    if (type === "password") {
      input.setAttribute("type", "text");
      eye.classList.remove("bi-eye-slash");
      eye.classList.add("bi-eye");
    } else {
      input.setAttribute("type", "password");
      eye.classList.add("bi-eye-slash");
      eye.classList.remove("bi-eye");
    }
  };
  /* const capWarning = component.querySelector(".warning-caps");

  input.addEventListener("keyup", function (event) {
    if (event.getModifierState("CapsLock")) {
      capWarning.classList.remove("off");
    } else {
      capWarning.classList.add("off");
    }
  }); */
});
