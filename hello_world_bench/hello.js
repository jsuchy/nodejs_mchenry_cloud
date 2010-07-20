// Run this from command line to load test:
// ab -n 1000 -c 100 http://127.0.0.1:8000/

var sys = require('sys'),
  	http = require('http');
var port = 8000;

var fastServer = function() {
	http.createServer(function(request, response) {
	  response.writeHead(200, {'Content-Type': 'text/plain'});
	  response.end('Hello Fast World\n');
	}).listen(port);
}

var slowServer = function() {
	http.createServer(function(request, response) {
	  setTimeout(function() {
	  	response.writeHead(200, {'Content-Type': 'text/plain'});
	  	response.end('Hello Slow World');
	  }, 2000);
	}).listen(port);
}

fastServer();
// slowServer();

console.log('Server running at http://127.0.0.1:' + port.toString());
