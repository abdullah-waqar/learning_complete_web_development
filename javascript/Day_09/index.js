//? DATE

const d = new Date()
console.log(d)

console.log(d.toDateString())

console.log(d.toString())

console.log(typeof d) // object

console.log(d.getDay())
console.log(d.getDate())


const date = Date.now()
console.log(date)


// Creating a time down timer

const currentDate = new Date()
const dateToBe = new Date("2028-08-14T00:00:00")

const totalDaysLeft = Math.floor(((dateToBe - currentDate) / (1000 * 60 * 60 * 24)))

console.log(`Total Days left: ${totalDaysLeft}`)