const http = require('http')
const bl = require('bl')

http.get(process.argv[2], (res) =>{
	res.pipe(bl((err, files) =>{
		if(err) throw err
		files = files.toString()
		console.log(files.length)
		console.log(files)	
	}))	
})
