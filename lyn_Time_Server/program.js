const net = require('net')
const dat = new Date()

function zero(index){
	if(index < 10){
		return '0' + index
	} else{
		return '' + index
	}
}
const server = net.createServer(function(socket){
	socket.end(		
		dat.getFullYear() + '-' +
		zero(dat.getMonth() + 1) + '-' +
		zero(dat.getDate()) + ' ' +
		zero(dat.getHours()) + ':' +
		zero(dat.getMinutes()) + '\n')
})
server.listen(Number(process.argv[2]))
