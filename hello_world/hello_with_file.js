var fs = require('fs'),
  	sys = require('sys');

fs.readFile('hello_with_file.js', function(error, readme) {
	if (error) {
		sys.puts(error);
	}
	else {
		sys.puts("Here's your file: " + readme);
	} 
});
