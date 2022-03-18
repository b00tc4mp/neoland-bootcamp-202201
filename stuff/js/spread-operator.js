const p1 = { x: 1 }
const p1c = true

const p2 = { y: 2 }
const p2c = false

const p3 = null
const p3c = true

const c = { ...(p1c && p1), ...(p2c && p2), ...(p3c && p3) }

console.log(c)