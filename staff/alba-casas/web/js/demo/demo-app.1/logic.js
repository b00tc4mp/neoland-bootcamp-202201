function authenticateUser(email, password) {
  const user = users.find(
    (user) => user.email === email && user.password === password
  );

  if (user) {
    return user.id;
  } else {
    throw new Error();
  }
}

function retrieveUser(id) {
  const user = users.find((user) => user.id === id);

  if (user) {
    return user;
  }

  return null;
}

function registerUser(name, surname, email, password) {
  const user = new User(name, surname, email, password);

  users.push(user);
}

function updateUser(id, name, surname, email, password) {
  const user = retrieveUser(id);
  user.name = name;
  user.surname = surname;
  user.email = email;
  user.password = password;
}

function unregisterUser(id, password) {
  const user = retrieveUser(id);
  if (user.password === password) {
    const index = users.indexOf(id);
    users.splice(index, 1);
  } else {
    throw new Error();
  }
  return null;
}
