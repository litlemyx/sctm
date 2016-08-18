var http = require("http");
var url = require("url");

function start(router, handlers){
	function onRequest(request, response){
		var postData = "";
		var pathName = url.parse(request.url).pathname;
		//console.log("Request for '" + pathName + "' received.");
		
		request.addListener("data", function(postDataChunk) {
		      postData += postDataChunk;
		      console.log("Received POST data chunk '"+
		      postDataChunk + "'.");
		    });

	    request.addListener("end", function() {
	    	router(handlers, pathName, response, postData);
	    });
	
	}
	http.createServer(onRequest).listen(8888);
}

exports.start = start;