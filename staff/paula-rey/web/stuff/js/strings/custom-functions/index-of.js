const text = 'hello wolrd'

function indexOf(string, searchValue) {
    for (let i = 0; i < string.length; i++) {
        const char = string[i]

        if (char === searchValue)
            return i
    }

    return -1
}

let index = indexOf(text, 'w')

console.log(index)

index = indexOf(text, 'j')

console.log(index)

index = indexOf(text, 'ol') // WARN it fails here! refactor indexOf()

console.log(index)