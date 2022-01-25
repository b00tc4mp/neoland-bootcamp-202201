const names = ['Peter', 'Laura', 'Mike', 'Jessica', 'Wendy', 'Maria']

const filter = (array, callback) => {
    const filtered = []
    for (let i = 0; i < array.length; i++) {
        const element = array[i]
        if (callback(element)) {
            filtered[filtered.length] = element
        }
    }
    return filtered
}

const filtered = filter(names, name => name.length > 4)
console.log(filtered)