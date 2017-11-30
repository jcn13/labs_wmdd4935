const Hapi = require('hapi')
const Joi = require('joi')

const server = new Hapi.Server()

server.connection({
	host: 'localhost',
	port: Number(process.argv[2] || 8080)
})

server.route({
	path: '/chickens/{breed}',
	method: 'GET',
	handler: myHandler,
	config:{
		validate: {
			params: {
				breed: Joi.string().required()
			}
		}		
	}
})

function myHandler(request, reply){			
	reply('You asked for the chicken ' + request.params.breed)
}
server.start(function(err){
	if(err){
		throw err
	}
	console.log(`Server started at: ${server.info.url}`)
})
