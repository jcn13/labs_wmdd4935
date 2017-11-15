const Hapi = require('hapi')
const Vision = require('vision')
const Path = require('path')


const server = new Hapi.Server()

server.connection({
	host: 'localhost',
	port: Number(process.argv[2] || 8080)
})

server.register(Vision, function(err){
	if(err){
		throw err
	}

	server.route({
		path: '/',
		method: 'GET',
		handler: {
			view: 'index.html'
		}
	})
})

server.views({
	engines:{
		html: require('handlebars')
	},
	path: Path.join(__dirname, 'templates')
})

server.start(function(err){
	if(err){
		throw err
	}
	console.log(`Server started at: ${server.info.uri}`)
})
