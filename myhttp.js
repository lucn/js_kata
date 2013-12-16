var net = require('net');

var http = {
	createServer: function(callback) {
		return new HttpServer(callback);
	}
};


function HttpServer(callback){
	this.listen = function(port) {
		var server = net.createServer();
		server.on('connection', function(client) {
			callback(1, client);
		});
		server.listen(port);
	};
}

module.exports = http;