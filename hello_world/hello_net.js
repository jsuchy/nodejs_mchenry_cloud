net = require("net"),
sys = require("sys");

var s = net.createServer();
s.addListener('connection', function (c) {
	c.end('hello\n\r');
});
	
s.listen(8000);

console.log('Server running at http://127.0.0.1:8000');