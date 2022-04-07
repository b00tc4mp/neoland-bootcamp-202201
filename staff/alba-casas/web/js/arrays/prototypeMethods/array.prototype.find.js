const names = ["Peter", "Laura", "Mike", "Jessica", "Wendy"];

const result = names.find((name) => {
  if (name === "Mike") {
    return true;
  }
});

/* const result = names.find((element) => (element === "Mike" ? true : false)); */

console.log(result);
