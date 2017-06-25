var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream('./BeowulfEnding.txt', 'utf8');

myReadStream.on('data', function(chunk){
    console.log("new buffer received: " );
    console.log(chunk);
});


// var http = require('http');

// var server = http.createServer(function(req, res){
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('Hey ya!');
// });

// server.listen(8080, '127.0.0.1');
// console.log("now listening to port 8080");