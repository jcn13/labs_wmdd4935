const Hapi = require('hapi')
const Joi = require('joi')

const server = new Hapi.Server()

server.connection({
	host: 'localhost',
	port: Number(process.argv[2] || 8080)
})

server.route({
	path: '/login',
	method: 'POST',
	handler: myHandler,
	config:{
		validate: {
			payload: Joi.object({
                isGuest: Joi.boolean(),
                username: Joi.string().when('isGuest', { is: false, then: Joi.required() }),
                password: Joi.string().alphanum(),
                accessToken: Joi.string().alphanum()
            }).options({ allowUnknown: true }).without('password', 'accessToken')
		}		
	},
})

function myHandler(request, reply){			
	reply('login successful')
}

server.start(function(err){
	if(err){
		throw err
	}
	console.log(`Server started at: ${server.info.uri}`)
})
