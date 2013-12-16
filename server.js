var http = require('./myhttp');
var fs = require('fs');

http.createServer(function(req, res) {
	fs.readFile('todo.html', 'utf-8', function(err, data) {
		res.write(data);
		res.end();

	})
}).listen(9432);

