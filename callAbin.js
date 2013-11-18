var http = require('http'),
	url = require('url'),
	childProcess = require('child_process'),
	fxnCall, server, queryData;

// Scrape a couple parameters out of the query string, pass them to C++, and print the return plus some other stuff to the DOM:
server = http.createServer(function (request, response) {
  queryData = url.parse(request.url, true).query;

  fxnCall = childProcess.exec(queryData.command, function(error, stderror, stdout){
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("return value: " + stderror);
  });
});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8000/");