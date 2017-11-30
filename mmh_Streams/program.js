const Hapi = require('hapi')
const Rot13 = require('rot13-transform')
const Fs = require('fs')
const Path = require('path')

const server = new Hapi.Server()

server.connection({
	host: 'localhost',
	port: Number(process.argv[2] || 8080)
})

server.route({
	path: '/',
	method: 'GET',
	handler: function(request, reply){
		let input = Fs.createReadStream(Path.join(__dirname, 'input.txt'))
		reply(input.pipe(Rot13()))
	}
})

server.start(function(err){
	if(err){
		throw err
	}
	console.log(`Server started at: ${server.info.uri}`)
})
