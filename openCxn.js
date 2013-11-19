var http = require('http'),
	url = require('url'),
	spawn = require('child_process').spawn,
    analyzer = spawn('a.out', [], 'pipe'),
	server, queryData;

// Scrape a couple parameters out of the query string, pass them to C++, and print the return plus some other stuff to the DOM:
server = http.createServer(function (request, response) {
	//parse query string
	queryData = url.parse(request.url, true).query;

	//pass the input from the query string into the pipe pointing at analyzer
    analyzer.stdin.write(queryData.input+'\n');

    //if analyzer spits anything out, post it to the screen
	analyzer.stdout.on('data', function (data) {
  		response.writeHead(200, {"Content-Type": "text/plain"});
  		response.end("return value: " + data);
	});

});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8000/");