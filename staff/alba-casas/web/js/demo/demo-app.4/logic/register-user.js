function registerUser(name, email, password) {
  validateName(name);
  validateEmail(email);
  validatePassword(password);

  let user = users.find((user) => user.email === email);

  if (user) throw new Error("user already exists");

  user = new User(name, email, password);

  users.push(user);
}
