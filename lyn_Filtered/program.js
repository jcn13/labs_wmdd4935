let fs = require('fs')
let location = process.argv[2]

fs.readdir(location, function(err, data){
	array = data.toString()
	console.log(array)
		
