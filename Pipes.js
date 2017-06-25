var http = require('http');
var fs = require('fs');


var server = http.createServer(function(req, res){
    console.log('request made: ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var myReadStream = fs.createReadStream('./BeowulfEnding.txt', 'utf8');
    myReadStream.pipe(res);
});

server.listen(8080, '127.0.0.1');
console.log("now listening to port 8080");