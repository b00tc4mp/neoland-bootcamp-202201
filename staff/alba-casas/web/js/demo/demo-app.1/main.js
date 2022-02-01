const landingView = document.querySelector(".landing");
const loginView = document.querySelector(".login");
const registerView = document.querySelector(".register");
const profileView = document.querySelector(".profile");
const homeView = document.querySelector(".home");
const titleView = document.querySelector(".home__welcome");
let activeUser = null;

const landingLoginLink = landingView.querySelector(".landing__login");
const landingRegisterLink = landingView.querySelector(".landing__register");

landingLoginLink.onclick = (event) => {
  event.preventDefault();

  landingView.classList.add("off");
  loginView.classList.remove("off");
};

landingRegisterLink.onclick = (event) => {
  event.preventDefault();

  landingView.classList.add("off");
  registerView.classList.remove("off");
};

const loginRegisterLink = loginView.querySelector(".login__register-link");

loginRegisterLink.onclick = (event) => {
  event.preventDefault();

  loginView.classList.add("off");

  registerView.classList.remove("off");
};

const registerLoginLink = registerView.querySelector(".register__login-link");

registerLoginLink.onclick = (event) => {
  event.preventDefault();

  registerView.classList.add("off");

  loginView.classList.remove("off");
};

const loginForm = loginView.querySelector(".login__form");

loginForm.onsubmit = (event) => {
  event.preventDefault();

  const emailInput = loginForm.querySelector(".login__email");
  const passwordInput = loginForm.querySelector(".login__password");

  const email = emailInput.value;
  const password = passwordInput.value;

  try {
    loginView.classList.add("off");
    homeView.classList.remove("off");
  } catch (error) {
    alert("wrong credentials");
  }
  const id = authenticateUser(email, password);
  activeUser = retrieveUser(id);
  titleView.innerText = `Hello, ${activeUser.name}!`;
};

const logOutHome = homeView.querySelector(".nav__log-out");
logOutHome.onclick = (event) => {
  event.preventDefault();

  landingView.classList.remove("off");
  homeView.classList.add("off");
  profileView.classList.add("off");
  titleView.classList.remove("off");
};

const profileHome = homeView.querySelector(".nav__profile");
const homeHome = homeView.querySelector(".nav__home");
const profileForm = profileView.querySelector(".profile__form");
const registerForm = registerView.querySelector(".register__form");
const deleteForm = profileView.querySelector(".delete-form");

profileHome.onclick = (event) => {
  event.preventDefault();

  const nameInput = profileForm.querySelector(".profile__name");
  const surnameInput = profileForm.querySelector(".profile__surname");
  const emailInput = profileForm.querySelector(".profile__email");
  const passwordInput = profileForm.querySelector(".profile__password");

  nameInput.value = activeUser.name;
  surnameInput.value = activeUser.surname;
  emailInput.value = activeUser.email;
  passwordInput.value = activeUser.password;

  titleView.classList.add("off");
  profileView.classList.remove("off");
};

profileForm.onsubmit = (event) => {
  event.preventDefault();

  const nameInput = profileForm.querySelector(".profile__name");
  const surnameInput = profileForm.querySelector(".profile__surname");
  const emailInput = profileForm.querySelector(".profile__email");
  const passwordInput = profileForm.querySelector(".profile__password");

  const name = nameInput.value;
  const surname = surnameInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;

  updateUser(activeUser.id, name, surname, email, password);
  activeUser = retrieveUser(activeUser.id);

  titleView.innerText = `Hello, ${activeUser.name}!`;

  profileView.classList.add("off");
  titleView.classList.remove("off");
};

homeHome.onclick = (event) => {
  event.preventDefault();

  profileView.classList.add("off");
  titleView.classList.remove("off");
};

registerForm.onsubmit = (event) => {
  event.preventDefault();

  const nameInput = registerForm.querySelector(".register__name");
  const surnameInput = registerForm.querySelector(".register__surname");
  const emailInput = registerForm.querySelector(".register__email");
  const passwordInput = registerForm.querySelector(".register__password");

  const name = nameInput.value;
  const surname = surnameInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;

  registerUser(name, surname, email, password);

  registerView.classList.add("off");

  loginView.classList.remove("off");
};

deleteForm.onsubmit = (event) => {
  event.preventDefault();

  const passwordInput = deleteForm.querySelector(".delete-form__input");
  try {
    unregisterUser(activeUser.id, passwordInput.value);
  } catch (error) {
    alert("Incorrect password");
    return;
  }
  profileView.classList.add("off");
  homeView.classList.add("off");
  landingView.classList.remove("off");
  titleView.classList.remove("off");

  alert("Deleted user");
};
