function generateId() {
  return parseInt(Math.random() * 1000000000).toString();
}

function newDate(year, month, day) {
  return new Date(year, month - 1, day);
}
