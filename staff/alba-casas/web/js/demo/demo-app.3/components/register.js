const registerLoginLink = registerView.querySelector(".register__login-link");

registerLoginLink.onclick = (event) => {
  event.preventDefault();

  registerView.classList.add("off");

  loginView.classList.remove("off");
};

const registerForm = registerView.querySelector(".register__form");

registerForm.onsubmit = (event) => {
  event.preventDefault();

  const nameInput = registerForm.querySelector(".register__name-input");
  const emailInput = registerForm.querySelector(".register__email-input");
  const passwordInput = registerForm.querySelector(".register__password-input");

  const name = nameInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;

  try {
    registerUser(name, email, password);

    nameInput.value = "";
    emailInput.value = "";
    passwordInput.value = "";

    registerView.classList.add("off");

    loginView.classList.remove("off");
  } catch (error) {
    alert(error.message);
  }
};
