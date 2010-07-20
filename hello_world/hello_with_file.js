var fs = require('fs'),
  	sys = require('sys');

fs.readFile('hello_with_file_1.js', function(error, readme) {
	if (error) {
		sys.puts(error);
		sys.puts(sys.inspect(error));
	}
	else {
		sys.puts("Here's your file: " + readme);
	} 
});
