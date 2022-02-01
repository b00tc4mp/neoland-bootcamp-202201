let userCount = 0;

class User {
  constructor(name, surname, email, password) {
    userCount++;

    this.id = `${userCount}`;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.password = password;
  }
}
const users = [new User("Pepito", "Grillo", "pepigri@gmail.com", "123123123")];
