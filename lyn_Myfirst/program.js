let fs = require('fs')
let location = process.argv[2]
let array = fs.readFileSync(location).toString()
let lines = array.split('\n')
let	count = lines.length -1
console.log(count)