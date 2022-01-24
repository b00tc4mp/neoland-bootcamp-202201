function calculateAge(year, month, day) {
  const date = new Date();

  const yearNow = date.getFullYear();
  const monthNow = date.getMonth() + 1;
  const dayNow = date.getDate();

  const age;

  if ((monthNow === month && dayNow >= day) || monthNow > month)
    age = yearNow - year;
  else age = yearNow - year - 1;

  return age;
}

const num = "-0.1";

onsole.log(parseInt(num));

console.log(Math.floor(Number(num)));

console.log(Math.trunc(num));

// -0
// -1
// -0

0 === -0;
true;
