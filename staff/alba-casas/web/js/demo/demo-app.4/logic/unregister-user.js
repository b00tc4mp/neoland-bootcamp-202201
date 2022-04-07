function unregisterUser(id, password) {
  validateId(id);
  validatePassword(password);

  let index;

  const user = users.find((user, _index) => {
    index = _index;
    return user.id === id && user.password === password;
  });

  if (!user) throw new Error("incorrect password");

  users.splice(index, 1);
}

/* function unregisterUser(id, password) {
    const user = users.find((user) => user.id === id);
    if (user) {
      if (user.password === password) {
        const index = users.indexOf(user);
        users.splice(index, 1);
  
        return;
      }
      throw new Error("wrong credentials");
    }
  
    throw new Error("user not found");
  } */
