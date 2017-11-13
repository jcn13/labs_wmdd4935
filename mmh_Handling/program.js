const Hapi = require('hapi')
const Inert = require('inert')


const server = new Hapi.Server()

server.connection({
	host: 'localhost',
	port: Number(process.argv[2] || 8080)
})

server.register(Inert, function(err){
	if(err){
		throw err
	}

	server.route({
	path: '/',
	method: 'GET',
	handler: function(request, reply){
		reply.file('index.html')
		}
	})
})

server.start(function(err){
	if(err){
		throw err
	}
	console.log(`Server started at: ${server.info.uri}`)
})
