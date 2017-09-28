let fs = require('fs')
let location = process.argv[2]
let array, lines
function numberOfLines(callback){
	fs.readFile(location, function(err, data){
		array = data.toString()
		lines = array.split('\n')
	callback();
	});
}
function printNumber(){
	console.log(lines.length -1)
}
numberOfLines(printNumber)