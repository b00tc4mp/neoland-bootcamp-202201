const generateId = () =>
  randomInteger(100000000, 999999999).toString() +
  randomElement("ABCDEFGHIJKLMNOPQRSTUVWXYZ");

const newDate = (year, month, day) => new Date(year, month - 1, day);

const calculateAge = (year, month, day) => {
  var date = new Date();
  var yearNow = date.getFullYear();
  var monthNow = date.getMonth();
  var dayNow = date.getDate();
  var age;
  if ((monthNow === month && dayNow >= day) || monthNow >= month)
    age = yearNow - year;
  else age = yearNow - year - 1;
  return age;
};

const randomInteger = (min, max) =>
  min + Math.round((max - min) * Math.random());

const randomElement = (iterable) => {
  const index = randomInteger(0, iterable.length - 1);
  return iterable[index];
};
