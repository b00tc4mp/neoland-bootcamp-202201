let car1 = '🐌'
let car2 = '🌮'
let car3 = '🚀'

const randomInteger = (min, max) => min + Math.round((max - min) * Math.random())

const intervalId = setInterval(()=>{
    console.clear()

    let steps = randomInteger(0,5)
    car1 = ' '.repeat(steps) + car1
    console.log(car1)

    steps = randomInteger(0,5)
    car2 = ' '.repeat(steps) + car2
    console.log(car2)

    steps = randomInteger(0,5)
    car3 = ' '.repeat(steps) + car3
    console.log(car3)

    if(car1.length >=100 || car2.length >= 100 || car3.length >=100){

        console.clear()
        
        console.log(car1 + car1.length)
        console.log(car2 + car2.length)
        console.log(car3 + car3.length)

        // const results = [car1, car2, car3].sort()
        // console.log(`First Place: ${results[0].trim()}(${results[0].length})`, 
        //             `Second Place: ${results[1].trim()}(${results[1].length})`,
        //             `Third Place: ${results[2].trim()} (${results[2].length})`)

        const results = [
            {car: car1.trim(), score: car1.length},
            {car: car2.trim(), score: car2.length},
            {car: car3.trim(), score: car3.length}].sort(function(a,b) {return b.score - a.score})

        console.log(`First Place: ${results[0].car}(${results[0].score})`, 
                    `Second Place: ${results[1].car}(${results[1].score})`,
                    `Third Place: ${results[2].car} (${results[2].score})`)

        clearInterval(intervalId)

    }
},100)