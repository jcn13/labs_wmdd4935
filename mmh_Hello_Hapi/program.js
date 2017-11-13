const Hapi = require('hapi')
const server = new Hapi.Server()

server.connection({
	host: 'localhost',
	port: Number(process.argv[2] || 8080)
})

server.route({
	path: '/',
	method: 'GET',
	handler: function(request,reply){
		reply("Hello hapi")
	}
})

server.start(function(err){
	if(err){
		throw err
	}
	console.log(`Server started at: ${server.info.uri}`)
})
