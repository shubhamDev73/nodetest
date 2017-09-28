var http = require("http");

http.createServer(function(request, response){
	response.writeHead(200, {"Content-Type": "text/html"});
	var n = 0;
	setInterval(function(){
		response.write("<h1>Welcome to "+request.url+" "+n+" no. of times</h1>");
		n++;
		if(n >= 10){
			return response.end();
		}
	}, 1000);
}).listen(8000);
