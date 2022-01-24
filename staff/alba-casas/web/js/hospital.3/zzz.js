function calculateAge(year, month, day) {
  var date = new Date();

  var yearNow = date.getFullYear();
  var monthNow = date.getMonth() + 1;
  var dayNow = date.getDate();

  var age;

  if ((monthNow === month && dayNow >= day) || monthNow > month)
    age = yearNow - year;
  else age = yearNow - year - 1;

  return age;
}

var num = "-0.1";

onsole.log(parseInt(num));

console.log(Math.floor(Number(num)));

console.log(Math.trunc(num));

// -0
// -1
// -0

0 === -0;
true;
