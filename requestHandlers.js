var querystring = require("querystring"),
    fs = require("fs"),
    byline = require("byline");

function start(response){
	
//	var stream = fs.createReadStream('sample.txt');
//	stream = byline.createStream(stream);
//
//	stream.on('data', function(line) {
//	  console.log(line);
//	});
//	
	fs.readFile("./index.html", function(error, html) {
    if(error) {
      response.writeHead(500, {"Content-Type": "text/plain"});
      response.write(error + "\n");
      response.end();
    } else {
    
    	
    	
      response.writeHead(200, {"Content-Type": "text/html"});
      response.write(html);
      response.end();
    }
  });
	
};

function upload(response, postData) {
	
	  console.log("Request handler 'upload' was called.");
	  response.writeHead(200, {"Content-Type": "text/plain"});
	  console.log("postData" + postData);
	 
	  response.write("You've sent: " + querystring.parse(postData).text);
	  response.end();
	
//	fs.readFile("./index.html", function(error, html) {
//	    if(error) {
//	      response.writeHead(500, {"Content-Type": "text/plain"});
//	      response.write(error + "\n");
//	      response.end();
//	    } else {
//	      response.writeHead(200, {"Content-Type": "text/html"});
//	      response.write(html);
//	      response.end();
//	    }
//	  });
};

function chat(response, postData) {
	var fs = require('fs');
	if(postData){
		
		fs.appendFile('sample.txt', postData+ '\r\n');
	}
//	var writer = fs.createWriteStream('sample.txt', {flags: 'w'});
//	writer.on('finish', function() {
//	    console.log('Запись выполнена успешно.');
//	});
//	var i = 0;
//	function write() {
//
//	    
//	        var ok = writer.write(querystring.parse(postData).text+ '\r\n');
//
//	        if (!ok) {
//	            writer.once('drain', write);
//	            break;
//	        }
//
//	        i++;
//
//	   
//
//	    
//	}
//	write();
//	
//	  console.log("Request handler 'upload' was called.");
//	  response.writeHead(200, {"Content-Type": "text/plain"});
//	  console.log("postData" + postData);
//	 
//	  response.write("You've sent: " + querystring.parse(postData).text);
//	  response.end();
	
	fs.readFile("./sample.txt", function(error, html) {
	    if(error) {
	      response.writeHead(500, {"Content-Type": "text/plain"});
	      response.write(error + "\n");
	      response.end();
	    } else {
	      response.writeHead(200, {"Content-Type": "text/plain"});
	      response.write(html);
	      response.end();
	    }
	  });
};

function show(response, postData) {
	  console.log("Request handler 'show' was called.");
	  fs.readFile("./tmp/test.png", "binary", function(error, file) {
	    if(error) {
	      response.writeHead(500, {"Content-Type": "text/plain"});
	      response.write(error + "\n");
	      response.end();
	    } else {
	      response.writeHead(200, {"Content-Type": "image/png"});
	      response.write(file, "binary");
	      response.end();
	    }
	  });
};


exports.start = start;
exports.upload = upload;
exports.show = show;
exports.chat = chat;

