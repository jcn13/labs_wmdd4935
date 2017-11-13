const fs = require('fs')
module.exports =(location, ext, callback) =>{
	fs.readdir(location, (err, data) =>{
		if(err){callback(err)}
		array = data
		for(let i = 0; i < array.length; ++i){
			if(RegExp('\\.' + ext + '$').test(array[i])){
				console.log(array[i])
			}
		}
		callback(null, arr)
	})
}