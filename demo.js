var https = require("https");

https.createServer(function(request, response){
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write("<h1>Welcome to "+request.url+"</h1>");
	response.end();
}).listen(443);
