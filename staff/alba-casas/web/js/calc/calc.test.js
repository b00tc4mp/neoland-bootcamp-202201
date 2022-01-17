let myCalc = new Calc("casio");

if (myCalc.name === "casio") console.log("pass");
else console.error("failed");

if (myCalc.add(3, 5) === 8) console.log("pass");
else console.error("failed");

if (myCalc.minus(8, 5) === 3) console.log("pass");
else console.error("failed");

if (myCalc.mult(2, 2) === 4) console.log("pass");
else console.error("failed");

if (myCalc.divi(10, 5) === 2) console.log("pass");
else console.error("failed");
