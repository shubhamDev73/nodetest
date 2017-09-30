var http = require("http");

http.createServer(function(request, response){
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write("<h1>Welcome to "+request.url+"</h1>");
	response.end();
}).listen(process.env.PORT || 5000);//24782
