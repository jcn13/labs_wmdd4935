const fs = require('fs')
const path = require('path')

module.exports = function(location, fileType, callback){
	fs.readdir(location, function(err, files){
		if(err) return callback(err)
		files = files.filter(function(data){
			return path.extname(data)=== '.' + fileType
		})
	callback(null, files)
	})
}