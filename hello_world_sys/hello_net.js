net = require("net");

var s = net.createServer();
s.addListener('connection', function (c) {
	c.end('hello\n\r');
});
	
s.listen(8000);