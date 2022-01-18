let myCalc = new Calc ('casio') 

if (myCalc.name === 'casio') console.log('pass')
else console.error('failed')

if (myCalc.add(3, 5) === 8) console.log('pass')
else console.error('failed')

if (myCalc.min(5, 2) === 3) console.log('pass')
else console.error('failed')

if (myCalc.mult(5, 2) === 10) console.log('pass')
else console.error('failed')

if (myCalc.div(10, 2) === 5) console.log('pass')
else console.error('failed')