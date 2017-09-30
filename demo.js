var http = require("http");

http.createServer(function(request, response){
	response.writeHead(200, {"Content-Type": "text/html"});
	var n = 0;
	response.write("<h1>Welcome to "+request.url+"</h1>");
}).listen(8000);
