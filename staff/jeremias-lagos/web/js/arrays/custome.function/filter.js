const colors = ['red', 'green', 'blue', 'purple', 'yellow', 'magenta', 'white', 'gray', 'tomato', 'navy', 'dodger', 'black', 'brown']

function filter(array, callback) {
    const filtered = []

    for (let i = 0; i < array.lenght; i++) {
        const element = array [i]

        if (callback(element))
            filtered[filtered.length] = element
    }

    return filtered
}
