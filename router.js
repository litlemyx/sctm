function router(handlers, pathName, response, postData){
	if(typeof handlers[pathName] === "function"){
		return handlers[pathName](response, postData);
		console.log("=============================\n");
	}
	else{
		if(pathName != "/favicon.ico")
		console.log("No handler for \"" + pathName + "\" request");
		response.writeHead(404, {"Content-type": "text/plain"})
		response.write("404. Not Found.");
		response.end();
	}
}

exports.router = router;