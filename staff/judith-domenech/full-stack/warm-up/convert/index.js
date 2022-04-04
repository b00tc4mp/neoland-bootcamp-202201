const fs = require('fs/promises')

const { argv: [,, command] } = process

if (command === 'copy') {

    fs.readFile('./input/lorem.txt', 'utf-8')
    .then(data => fs.writeFile('./output/lorem-copy.txt', data))
    .then(() => console.log('success'))
    .catch(console.log)
}  

else if (command === 'process-data') {

    fs.readFile('./input/lorem.txt', 'utf-8')
    .then(data => {
        let str =""
    for(let i =0; i < data.length; i++){
           
const chart = data[i]

        if(chart == '0') str = str + 'o'
        else if(chart == '5') str = str + 's'
        else if(chart == '1') str = str + 'l'
        else str = str + chart
    } 
    return fs.writeFile('./output/lorem-process-data.txt', str)
})

    .then(() => console.log('success'))
    .catch(console.log)

}

else console.log('command not found')