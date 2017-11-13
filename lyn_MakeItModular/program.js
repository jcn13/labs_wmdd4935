const myModule = require('./myModule')

const location = process.argv[2]
const fileType = process.argv[3]


myModule(location, fileType, (err, files) =>{
	if(err) throw err		
	for(let i = 0; i < files.length; ++i){
			console.log(files[i])
	}	
})
