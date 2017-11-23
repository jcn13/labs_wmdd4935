const http = require('http')
const bl = require('bl')
const array = []
let c = 0

for(let i = 0; i < 3; ++i){
	http.get(process.argv[2 + i], (res) =>{
		res.pipe(bl((err, files) => {
			if(err) throw err
			array[i] = files.toString()
			++c
			if(c === 3){
				for(let j = 0; j < 3; ++j){
					console.log(array[j])
				}
			}
		}))
	})	
}
