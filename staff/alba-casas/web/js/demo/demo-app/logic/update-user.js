function updateUser(id, name, email) {
  debugger;
  validateToken(id);
  validateName(name);
  validateEmail(email);

  const user = users.find((user) => user.id === id);

  if (!user) throw Error("user not found");

  user.name = name;
  user.email = email;
}
