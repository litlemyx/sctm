var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handlers = {};
handlers["/"] = requestHandlers.start;
handlers["/start"] = requestHandlers.start;
handlers["/upload"] = requestHandlers.upload;
handlers["/chat"] = requestHandlers.chat;
handlers["/show"] = requestHandlers.show;

server.start(router.router, handlers);