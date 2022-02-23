const fs = require("fs/promises");

const {
  argv: [, , command],
} = process;

if (command === "process-data") {
  fs.readFile("./input/lorem.txt", "utf-8")
    .then((data) => {
      let string = "";

      for (i = 0; i < data.length; i++) {
        if (data[i] == "0") {
          string += "o";
        } else if (data[i] == "5") {
          string += "s";
        } else if (data[i] == "1") {
          string += "l";
        } else {
          string += data[i];
        }
      }
      return fs.writeFile("./output/lorem-copy.txt", string);
    })
    .then(() => console.log("success"))
    .catch(console.log);
}

// TODO proccess-data to  lorem-process.txt || '0' should be 'o', '5' should be 's', '1' should be 'l'
// Not use Array.prototype or others prototypes
else console.log("command not found");
