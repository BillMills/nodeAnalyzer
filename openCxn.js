var http = require('http'),  					//for building the server
	url = require('url'),						//for scraping the URL
	spawn = require('child_process').spawn,		//for making a child process
    analyzer = spawn('a.out', [], 'pipe'),		//starting the child, and piping stdin/our/err
	server, queryData;

// define server response:
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