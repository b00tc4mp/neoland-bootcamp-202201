const { connect, disconnect } = require("mongoose");
const { User, Property, CreditCard } = require("./models");

connect("mongodb://localhost:27017/demo-db")
  .then(() => console.log("connected"))
  .then(() =>
    Promise.all([
      User.deleteMany(),
      Property.deleteMany(),
      CreditCard.deleteMany(),
    ])
  )

  //.then(() => User.create({ name: 'Agua Cate', email: 'agua@cate.com', password: '123123123'}))
  //.then(() => User.create({ name: 'Ora Culo', email: 'ora@culo.com', password: '123123123'}))

  // .then(() => {
  //     const aguaSave = User.create({ name: 'Agua Cate', email: 'agua@cate.com', password: '123123123'})
  //     const oraSave = User.create({ name: 'Ora Culo', email: 'ora@culo.com', password: '123123123'})

  //     return Promise.all([aguaSave, oraSave])
  // })
  // .then(() => {
  //     const aguaSave = new User({ name: 'Agua Cate', email: 'agua@cate.com', password: '123123123' }).save()
  //     const oraSave = new User({ name: 'Ora Culo', email: 'ora@culo.com', password: '123123123' }).save()

  //     return Promise.all([aguaSave, oraSave])
  // })

  .then(() => {
    const agua = new User({
      name: "Agua Cate",
      email: "agua@cate.com",
      password: "123123123",
    });
    const ora = new User({
      name: "Ora Culo",
      email: "ora@culo.com",
      password: "234234234",
    });
    return Promise.all([agua.save(), ora.save()]);
  })
  .then((users) => {
    const [agua, ora] = users;

    const aguaCard = new CreditCard({
      fullName: "Agua Cate Quesis",
      number: "1234 1234 1234 1234",
      expiration: new Date(),
    });
    agua.creditCards.push(aguaCard);

    const aguaCard2 = new CreditCard({
      fullName: "Agua Cate Quesis",
      number: "3456 3456 3456 3456",
      expiration: new Date(),
    });
    agua.creditCards.push(aguaCard2);

    const oraCard = new CreditCard({
      fullName: "Ora Culo Quesis",
      number: "2345 2345 2345 2345",
      expiration: new Date(),
    });
    ora.creditCards.push(oraCard);

    return Promise.all([agua.save(), ora.save()]);
  })
  .then(([agua, ora]) => {
    const talent = new Property({
      cadastral: "ES-CA-123123123",
      date: new Date(),
      address: "Ramon Turro 169",
      area: 3000,
      owners: [agua.id, ora.id],
    });

    return talent.save();
  })
  // Encuentrame a los usuarios cuyos ids se encuentren dentro de los dueños del talent
  .then((talent) => User.find({ _id: { $in: talent.owners } }))
  .then((users) => {
    const [agua, ora] = users;
  })
  // Crear
  /* .then(() =>
    User.create({
      name: "Agua Cate",
      email: "agua@cate.com",
      password: "123123123",
    })
  ) */
  // Encontrar
  /*   .then(() => User.findById("6216419078f4e03d6ff2bd3c"))
   */ // Actualizar
  /* .then((user) => {
    user.name = "Pepita Grilla";
    user.email = "pepita@grilla.com";

    return user.save();
  }) */
  //Borrar
  /*  .then(() => User.deleteOne({ _id: "6216419078f4e03d6ff2bd3c" }))
  .then(() => console.log("user deleted")) */
  .then(() => disconnect())
  .then(() => console.log("disconnected"));
