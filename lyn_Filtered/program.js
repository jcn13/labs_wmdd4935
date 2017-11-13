const mymodule = require('./mymodule')
const location = process.argv[2]
const extension = process.argv[3]

mymodule(location, extension)