function updateUser(id, name, email) {
  debugger;
  validateId(id);
  validateName(name);
  validateEmail(email);

  const user = users.find((user) => user.id === id);

  if (!user) throw Error("user not found");

  user.name = name;
  user.email = email;
}
